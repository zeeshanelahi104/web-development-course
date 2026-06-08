// Base URL of the Express API. The frontend is a separate folder/origin,
// so we point at the server's absolute URL (PORT in express-server/.env).
const API_URL = 'http://localhost:8000';

// --- DOM references ---
const form = document.getElementById('user-form');
const formTitle = document.getElementById('form-title');
const userIdInput = document.getElementById('user-id');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');
const refreshBtn = document.getElementById('refresh-btn');
const usersContainer = document.getElementById('users');
const message = document.getElementById('message');

// --- Helpers ---
function showMessage(text, type = 'success') {
  message.textContent = text;
  message.className = `message ${type}`;
  if (text) {
    setTimeout(() => {
      message.textContent = '';
      message.className = 'message';
    }, 3000);
  }
}

function resetForm() {
  form.reset();
  userIdInput.value = '';
  formTitle.textContent = 'Add User';
  submitBtn.textContent = 'Add User';
  cancelBtn.classList.add('hidden');
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// --- API calls ---
async function fetchUsers() {
  usersContainer.innerHTML = '<p class="empty">Loading...</p>';
  try {
    const res = await fetch(`${API_URL}/users`);
    if (!res.ok) throw new Error('Failed to load users');
    const users = await res.json();
    renderUsers(users);
  } catch (err) {
    usersContainer.innerHTML =
      `<p class="empty">${escapeHtml(err.message)}. Is the server running on port 8000?</p>`;  }
}

async function saveUser(event) {
  event.preventDefault();

  const id = userIdInput.value;
  const payload = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
  };
  if (ageInput.value !== '') {
    payload.age = Number(ageInput.value);
  }

  const isEdit = Boolean(id);
  const url = isEdit ? `${API_URL}/${id}` : API_URL;
  const method = isEdit ? 'PUT' : 'POST';

  try {
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    showMessage(isEdit ? 'User updated' : 'User created', 'success');
    resetForm();
    fetchUsers();
  } catch (err) {
    showMessage(err.message, 'error');
  }
}

async function deleteUser(id) {
  if (!confirm('Delete this user?')) return;
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Delete failed');
    showMessage('User deleted', 'success');
    fetchUsers();
  } catch (err) {
    showMessage(err.message, 'error');
  }
}

function startEdit(user) {
  userIdInput.value = user._id;
  nameInput.value = user.name || '';
  emailInput.value = user.email || '';
  ageInput.value = user.age ?? '';
  formTitle.textContent = 'Edit User';
  submitBtn.textContent = 'Update User';
  cancelBtn.classList.remove('hidden');
  nameInput.focus();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Rendering ---
function renderUsers(users) {
  if (!users.length) {
    usersContainer.innerHTML = '<p class="empty">No users yet. Add one above.</p>';
    return;
  }

  usersContainer.innerHTML = '';
  users.forEach((user) => {
    const card = document.createElement('div');
    card.className = 'user';

    const agePart = user.age != null ? ` &middot; Age ${user.age}` : '';
    card.innerHTML = `
      <div class="user-info">
        <h3>${escapeHtml(user.name)}</h3>
        <p>${escapeHtml(user.email)}${agePart}</p>
      </div>
      <div class="user-actions">
        <button class="btn ghost small" data-action="edit">Edit</button>
        <button class="btn danger small" data-action="delete">Delete</button>
      </div>
    `;

    card.querySelector('[data-action="edit"]').addEventListener('click', () => startEdit(user));
    card.querySelector('[data-action="delete"]').addEventListener('click', () => deleteUser(user._id));

    usersContainer.appendChild(card);
  });
}

// --- Events ---
form.addEventListener('submit', saveUser);
cancelBtn.addEventListener('click', resetForm);
refreshBtn.addEventListener('click', fetchUsers);

// Initial load
fetchUsers();
