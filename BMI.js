const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const hitungBtn = document.getElementById('hitungBtn');
const resetBtn = document.getElementById('resetBtn');
const bmiValueSpan = document.getElementById('bmiValue');
const categoryValueSpan = document.getElementById('categoryValue');

function hitungBMI() {
    let weight = weightInput.value.trim();
    let height = heightInput.value.trim();

    if (weight === '' || height === '') {
        alert('Mohon isi berat dan tinggi badan!');
        return;
    }

    weight = parseFloat(weight);
    height = parseFloat(height);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Masukkan angka yang valid dan lebih dari 0!');
        return;
    }

    const heightInM = height / 100;

    const bmi = weight / (heightInM * heightInM);
    const roundedBMI = bmi.toFixed(1);

    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight (Kurus)';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight (Gemuk)';
     } else if (bmi >= 30 && bmi < 35) {
        category = 'Obese (Obesitas)';
    } else {
        category = 'Extremely Obese (Sangat Obesitas)';
    }

    bmiValueSpan.textContent = roundedBMI;
    categoryValueSpan.textContent = category;

    if (bmi < 18.5) {
        categoryValueSpan.style.color = '#2196F3'; 
    } else if (bmi < 25) {
        categoryValueSpan.style.color = '#4CAF50'; 
    } else if (bmi < 30) {
        categoryValueSpan.style.color = '#FF9800';
    } else {
        categoryValueSpan.style.color = '#f44336'; 
    }
}

function resetForm() {
    weightInput.value = '';
    heightInput.value = '';
    bmiValueSpan.textContent = '0.0';
    categoryValueSpan.textContent = '-';
    categoryValueSpan.style.color = '#333'; 
}

hitungBtn.addEventListener('click', hitungBMI);
resetBtn.addEventListener('click', resetForm);

weightInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') hitungBMI();
});

heightInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') hitungBMI();
});