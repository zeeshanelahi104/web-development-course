/**
 * ========================================
 * STUDENT MANAGEMENT SYSTEM
 * Complete DOM CRUD with LocalStorage
 * ========================================
 */

// ========================================
// GLOBAL VARIABLES
// ========================================

let students = [];
let currentEditId = null;

// DOM Elements
const studentForm = document.getElementById('studentForm');
const studentTableBody = document.getElementById('studentTableBody');
const saveBtn = document.getElementById('saveBtn');
const updateBtn = document.getElementById('updateBtn');
const cancelBtn = document.getElementById('cancelBtn');
const resetBtn = document.getElementById('resetBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const exportDataBtn = document.getElementById('exportDataBtn');
const loadSampleBtn = document.getElementById('loadSampleBtn');
const searchInput = document.getElementById('searchInput');
const filterCourse = document.getElementById('filterCourse');
const clearFilterBtn = document.getElementById('clearFilterBtn');

// Form inputs
const studentId = document.getElementById('studentId');
const fullName = document.getElementById('fullName');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const email = document.getElementById('email');
const course = document.getElementById('course');
const address = document.getElementById('address');
const phone = document.getElementById('phone');

// Stats elements
const totalStudentsSpan = document.getElementById('totalStudents');
const averageAgeSpan = document.getElementById('averageAge');
const totalCoursesSpan = document.getElementById('totalCourses');

// ========================================
// LOCALSTORAGE FUNCTIONS
// ========================================

// Load data from LocalStorage
function loadFromLocalStorage() {
    const storedStudents = localStorage.getItem('students');
    if (storedStudents) {
        students = JSON.parse(storedStudents);
    } else {
        students = [];
    }
    renderTable();
    updateStats();
}

// Save data to LocalStorage
function saveToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(students));
}

// ========================================
// CRUD OPERATIONS
// ========================================

// Create - Add new student
function addStudent(studentData) {
    // Generate unique ID
    const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    
    const newStudent = {
        id: newId,
        ...studentData,
        createdAt: new Date().toISOString()
    };
    
    students.push(newStudent);
    saveToLocalStorage();
    renderTable();
    updateStats();
    showToast('Student added successfully! ✅', 'success');
    
    // Log to console for debugging
    console.log('Added student:', newStudent);
    console.log('Total students:', students.length);
}

// Read - Get all students (with optional filters)
function getStudents(searchTerm = '', courseFilter = 'all') {
    let filtered = [...students];
    
    // Filter by search term (name, email, course)
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(student => 
            student.fullName.toLowerCase().includes(term) ||
            student.email.toLowerCase().includes(term) ||
            student.course.toLowerCase().includes(term)
        );
    }
    
    // Filter by course
    if (courseFilter !== 'all') {
        filtered = filtered.filter(student => student.course === courseFilter);
    }
    
    return filtered;
}

// Update - Edit existing student
function updateStudent(id, updatedData) {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        students[index] = {
            ...students[index],
            ...updatedData,
            updatedAt: new Date().toISOString()
        };
        saveToLocalStorage();
        renderTable();
        updateStats();
        showToast('Student updated successfully! 🔄', 'success');
        
        console.log('Updated student:', students[index]);
    }
}

// Delete - Remove student
function deleteStudent(id) {
    const student = students.find(s => s.id === id);
    const confirmDelete = confirm(`Are you sure you want to delete ${student?.fullName}?`);
    
    if (confirmDelete) {
        students = students.filter(s => s.id !== id);
        saveToLocalStorage();
        renderTable();
        updateStats();
        showToast('Student deleted successfully! 🗑️', 'warning');
        
        console.log('Deleted student ID:', id);
        console.log('Remaining students:', students.length);
    }
}

// Delete all students
function deleteAllStudents() {
    const confirmDelete = confirm('⚠️ WARNING: This will delete ALL students. Are you sure?');
    
    if (confirmDelete) {
        students = [];
        saveToLocalStorage();
        renderTable();
        updateStats();
        showToast('All students deleted! 🗑️', 'warning');
        
        console.log('All students deleted');
    }
}

// ========================================
// DOM MANIPULATION - RENDER TABLE
// ========================================

// Render students table using innerHTML
function renderTable() {
    const searchTerm = searchInput.value;
    const courseFilter = filterCourse.value;
    const filteredStudents = getStudents(searchTerm, courseFilter);
    
    // Clear table body
    studentTableBody.innerHTML = '';
    
    // Check if no students
    if (filteredStudents.length === 0) {
        const emptyRow = document.createElement('tr');
        emptyRow.className = 'empty-row';
        emptyRow.innerHTML = `<td colspan="8">No students found. Add your first student!</td>`;
        studentTableBody.appendChild(emptyRow);
        return;
    }
    
    // Render each student row
    filteredStudents.forEach((student, index) => {
        const row = document.createElement('tr');
        row.className = 'fade-in';
        
        // Using innerHTML for row content
        row.innerHTML = `
            <td>${student.id}</td>
            <td><strong>${escapeHtml(student.fullName)}</strong></td>
            <td>${student.age}</td>
            <td>${getGenderIcon(student.gender)} ${student.gender}</td>
            <td>${escapeHtml(student.email)}</td>
            <td><span class="course-badge">${escapeHtml(student.course)}</span></td>
            <td>${student.phone || '—'}</td>
            <td class="action-buttons">
                <button class="action-btn view-btn" onclick="viewStudent(${student.id})">👁️ View</button>
                <button class="action-btn edit-btn" onclick="editStudent(${student.id})">✏️ Edit</button>
                <button class="action-btn delete-btn" onclick="deleteStudent(${student.id})">🗑️ Delete</button>
            </td>
        `;
        
        studentTableBody.appendChild(row);
    });
    
    // Console log for debugging
    console.log(`Rendered ${filteredStudents.length} students`);
}

// Helper function to escape HTML (prevents XSS)
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Helper function for gender icon
function getGenderIcon(gender) {
    switch(gender) {
        case 'Male': return '👨';
        case 'Female': return '👩';
        case 'Other': return '🧑';
        default: return '';
    }
}

// ========================================
// FORM HANDLING
// ========================================

// Get form data as object
function getFormData() {
    return {
        fullName: fullName.value.trim(),
        age: parseInt(age.value),
        gender: gender.value,
        email: email.value.trim(),
        course: course.value,
        address: address.value.trim(),
        phone: phone.value.trim()
    };
}

// Validate form data
function validateForm(data) {
    const errors = [];
    
    if (!data.fullName) errors.push('Full name is required');
    if (data.fullName && data.fullName.length < 3) errors.push('Name must be at least 3 characters');
    if (!data.age || data.age < 1 || data.age > 120) errors.push('Valid age is required (1-120)');
    if (!data.gender) errors.push('Gender is required');
    if (!data.email) errors.push('Email is required');
    if (!data.email.includes('@')) errors.push('Valid email is required');
    if (!data.course) errors.push('Course is required');
    
    return errors;
}

// Reset form to default state
function resetForm() {
    studentId.value = '';
    fullName.value = '';
    age.value = '';
    gender.value = '';
    email.value = '';
    course.value = '';
    address.value = '';
    phone.value = '';
    currentEditId = null;
    
    // Toggle buttons
    saveBtn.style.display = 'inline-block';
    updateBtn.style.display = 'none';
    cancelBtn.style.display = 'none';
    
    // Remove validation styles
    document.querySelectorAll('.form-group input, .form-group select').forEach(field => {
        field.style.borderColor = '#e0e0e0';
    });
}

// Handle form submission (Add/Update)
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = getFormData();
    const errors = validateForm(formData);
    
    if (errors.length > 0) {
        showToast(errors.join(', '), 'error');
        console.log('Validation errors:', errors);
        return;
    }
    
    if (currentEditId) {
        // Update existing student
        updateStudent(currentEditId, formData);
        resetForm();
    } else {
        // Add new student
        addStudent(formData);
        resetForm();
    }
}

// Edit student (populate form)
function editStudent(id) {
    const student = students.find(s => s.id === id);
    if (student) {
        currentEditId = id;
        studentId.value = student.id;
        fullName.value = student.fullName;
        age.value = student.age;
        gender.value = student.gender;
        email.value = student.email;
        course.value = student.course;
        address.value = student.address || '';
        phone.value = student.phone || '';
        
        // Toggle buttons
        saveBtn.style.display = 'none';
        updateBtn.style.display = 'inline-block';
        cancelBtn.style.display = 'inline-block';
        
        showToast(`Editing ${student.fullName}`, 'info');
        console.log('Editing student:', student);
        
        // Scroll to form
        document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
    }
}

// View student details
function viewStudent(id) {
    const student = students.find(s => s.id === id);
    if (student) {
        const details = `
            📋 STUDENT DETAILS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ID: ${student.id}
            Name: ${student.fullName}
            Age: ${student.age}
            Gender: ${student.gender}
            Email: ${student.email}
            Course: ${student.course}
            Phone: ${student.phone || 'Not provided'}
            Address: ${student.address || 'Not provided'}
            Created: ${new Date(student.createdAt).toLocaleString()}
        `;
        
        console.log(details);
        alert(`Student Details:\n\nName: ${student.fullName}\nEmail: ${student.email}\nCourse: ${student.course}\nAge: ${student.age}`);
        showToast(`Viewing ${student.fullName}`, 'info');
    }
}

// Cancel editing
function cancelEdit() {
    resetForm();
    showToast('Edit cancelled', 'info');
}

// ========================================
// STATISTICS CALCULATIONS
// ========================================

function updateStats() {
    // Total students
    totalStudentsSpan.textContent = students.length;
    
    // Average age
    if (students.length > 0) {
        const totalAge = students.reduce((sum, s) => sum + s.age, 0);
        const avgAge = (totalAge / students.length).toFixed(1);
        averageAgeSpan.textContent = avgAge;
    } else {
        averageAgeSpan.textContent = '0';
    }
    
    // Unique courses count
    const uniqueCourses = new Set(students.map(s => s.course));
    totalCoursesSpan.textContent = uniqueCourses.size;
}

// ========================================
// SEARCH AND FILTER FUNCTIONS
// ========================================

function handleSearch() {
    renderTable();
    console.log('Search term:', searchInput.value);
}

function handleFilter() {
    renderTable();
    console.log('Course filter:', filterCourse.value);
}

function clearFilters() {
    searchInput.value = '';
    filterCourse.value = 'all';
    renderTable();
    showToast('Filters cleared', 'info');
}

// ========================================
// EXPORT FUNCTIONALITY
// ========================================

function exportToConsole() {
    console.log('=' .repeat(60));
    console.log('STUDENT MANAGEMENT SYSTEM - DATA EXPORT');
    console.log('=' .repeat(60));
    console.log(`Total Students: ${students.length}`);
    console.log('\nStudents List:');
    console.table(students);
    console.log('\nDetailed View:');
    students.forEach((student, index) => {
        console.log(`\n[${index + 1}] ${student.fullName}`);
        console.log(`    ID: ${student.id}`);
        console.log(`    Email: ${student.email}`);
        console.log(`    Course: ${student.course}`);
        console.log(`    Age: ${student.age}`);
        console.log(`    Gender: ${student.gender}`);
        console.log(`    Phone: ${student.phone || 'N/A'}`);
        console.log(`    Address: ${student.address || 'N/A'}`);
        console.log(`    Created: ${new Date(student.createdAt).toLocaleString()}`);
    });
    console.log('\n' + '='.repeat(60));
    showToast('Data exported to console! Check Console (F12)', 'success');
}

// ========================================
// LOAD SAMPLE DATA
// ========================================

function loadSampleData() {
    const sampleStudents = [
        {
            id: 1,
            fullName: 'Ahmed Raza',
            age: 20,
            gender: 'Male',
            email: 'ahmed@example.com',
            course: 'Artificial Intelligence',
            phone: '03001234567',
            address: 'Faisalabad, Pakistan',
            createdAt: new Date().toISOString()
        },
        {
            id: 2,
            fullName: 'Fatima Khan',
            age: 19,
            gender: 'Female',
            email: 'fatima@example.com',
            course: 'Web Development',
            phone: '03007654321',
            address: 'Lahore, Pakistan',
            createdAt: new Date().toISOString()
        },
        {
            id: 3,
            fullName: 'Ali Hassan',
            age: 22,
            gender: 'Male',
            email: 'ali@example.com',
            course: 'Data Science',
            phone: '03009876543',
            address: 'Islamabad, Pakistan',
            createdAt: new Date().toISOString()
        },
        {
            id: 4,
            fullName: 'Sara Ahmed',
            age: 21,
            gender: 'Female',
            email: 'sara@example.com',
            course: 'JavaScript Mastery',
            phone: '03005556677',
            address: 'Karachi, Pakistan',
            createdAt: new Date().toISOString()
        },
        {
            id: 5,
            fullName: 'Bilal Aslam',
            age: 23,
            gender: 'Male',
            email: 'bilal@example.com',
            course: 'Python Programming',
            phone: '03004445566',
            address: 'Multan, Pakistan',
            createdAt: new Date().toISOString()
        }
    ];
    
    students = sampleStudents;
    saveToLocalStorage();
    renderTable();
    updateStats();
    showToast('Sample data loaded! 📚', 'success');
    console.log('Sample data loaded:', sampleStudents);
}

// ========================================
// TOAST NOTIFICATION
// ========================================

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.className = 'toast show';
    
    // Change color based on type
    if (type === 'error') {
        toast.style.background = '#f44336';
    } else if (type === 'warning') {
        toast.style.background = '#ff9800';
    } else if (type === 'success') {
        toast.style.background = '#4caf50';
    } else {
        toast.style.background = '#333';
    }
    
    setTimeout(() => {
        toast.classList.remove('show');
        toast.style.background = '#333';
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================

// Form submission
studentForm.addEventListener('submit', handleSubmit);

// Reset form button
resetBtn.addEventListener('click', () => {
    resetForm();
    showToast('Form reset', 'info');
});

// Update button
updateBtn.addEventListener('click', handleSubmit);

// Cancel button
cancelBtn.addEventListener('click', cancelEdit);

// Delete all button
deleteAllBtn.addEventListener('click', deleteAllStudents);

// Export button
exportDataBtn.addEventListener('click', exportToConsole);

// Load sample data button
loadSampleBtn.addEventListener('click', loadSampleData);

// Search input - real-time search
searchInput.addEventListener('input', handleSearch);

// Filter dropdown
filterCourse.addEventListener('change', handleFilter);

// Clear filter button
clearFilterBtn.addEventListener('click', clearFilters);

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
    // Ctrl + S to save
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        if (currentEditId) {
            handleSubmit(event);
        } else {
            saveBtn.click();
        }
    }
    
    // Escape to cancel edit
    if (event.key === 'Escape') {
        if (currentEditId) {
            cancelEdit();
        }
    }
});

// ========================================
// INITIALIZATION
// ========================================

function init() {
    loadFromLocalStorage();
    console.log('Application initialized!');
    console.log('Students in storage:', students.length);
    
    // Add CSS for course badges dynamically
    const style = document.createElement('style');
    style.textContent = `
        .course-badge {
            background: #e8f5e9;
            color: #4caf50;
            padding: 4px 8px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }
        .action-buttons {
            display: flex;
            gap: 5px;
            flex-wrap: wrap;
        }
        input:invalid, select:invalid {
            border-color: #ff9800;
        }
    `;
    document.head.appendChild(style);
}

// Start the application
init();