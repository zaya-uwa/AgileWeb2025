function createStudentInputs() {
    const groupInput = document.getElementById('group1');
    const numberOfMembers = groupInput.value;
    const form = groupInput.closest('form');
    
    // Remove existing student inputs
    const existingInputs = form.querySelectorAll('.student-input');
    existingInputs.forEach(input => input.remove());

    // Add new student inputs
    for (let i = 1; i <= numberOfMembers; i++) {
        const label = document.createElement('label');
        label.textContent = `Student ${i} Name:`;
        label.classList.add('student-input');
        
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `student${i}`;
        input.classList.add('student-input');
        
        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement('br'));
    }
}