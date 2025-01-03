document.querySelectorAll('.tab-trigger').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tabs-content').forEach(tab => {
      tab.classList.remove('active');
    });
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});
