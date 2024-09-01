import React, { useEffect } from 'react';

const LanguageToggle = () => {
  useEffect(() => {
    const toggleButton = document.querySelectorAll('.toggleButton');
    const englishElements = document.querySelectorAll('.en');
    const arabicElements = document.querySelectorAll('.ar');

    toggleButton.forEach(button => {
        button.addEventListener('click', function() {
            
            englishElements.forEach(element => {
              element.classList.toggle('hide');
            });
      
            arabicElements.forEach(element => {
              element.classList.toggle('hide');
            });
          });
      
          return () => {
            toggleButton.removeEventListener('click');
          };
        }, []);
    });

  return (
    <div>
      <button className="en hide toggleButton">English</button>
      <button className="ar toggleButton">العربية</button>
    </div>
  );
};

export default LanguageToggle;
