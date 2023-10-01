// استخدم const لتعريف المتغيرات إذا كانت لا تتغير
const ourSkillSection = document.querySelector(".our-skills");
const progressBars = document.querySelectorAll(".our-skills .progress span");

console.log(ourSkillSection);

// انفصل الوظيفة المعينة لمنسوب التمرير عن طريق إضافة مستمع الحدث باستخدام addEventListener
window.addEventListener("scroll", () => {
  // افحص إذا كان الواجهة قد تجاوزت منطقة العنصر ".our-skills"
  if (window.scrollY >= ourSkillSection.offsetTop) {
    // استخدم forEach للتكرار على كل عنصر
    progressBars.forEach((progressBar) => {
      const progressValue = progressBar.dataset.progress;
      // ضبط عرض الشريط باستخدام قيمة "data-progress"
      progressBar.style.width = progressValue;
    });
  }
});
