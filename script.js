function displayDetails(serviceName, details) {
    const firstSection = document.querySelector('.first-section');
    const h2 = firstSection.querySelector('h2');
    const p = firstSection.querySelector('p');

    h2.textContent = serviceName;
    p.textContent = details;
}

document.addEventListener('DOMContentLoaded', function() {
    const firstSection = document.querySelector('.first-section');
    const h2 = firstSection.querySelector('h2');
    const p = firstSection.querySelector('p');

    firstSection.addEventListener('mouseleave', function() {
        h2.textContent = 'NITR Connect';
        p.textContent = ' Where Students Trade, Lost Treasures are found, and City Life Intersect! \n Feel free to click on the links to learn more about the specific services and discover what they have to offer. Enjoy exploring the different aspects of NITR Connect! ';
    });
});
  
  
  