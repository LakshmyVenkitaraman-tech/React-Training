let draggedCard = null;

function initDragDrop() {
  const cards = document.querySelectorAll('.card');
  const columns = document.querySelectorAll('[id^="col"]');
  cards.forEach(card => {
    card.addEventListener('dragstart', (e) => {
      draggedCard = card;
      card.classList.add('opacity-50');
    });

    card.addEventListener('dragend', () => {
      draggedCard = null;
      card.classList.remove('opacity-50');
    });
  });
  columns.forEach(col => {
    col.addEventListener('dragover', (e) => {
      e.preventDefault(); 
    });
    col.addEventListener('drop', () => {
      if (draggedCard) {
        col.appendChild(draggedCard);
      }
    });
    });
   }

window.addEventListener('DOMContentLoaded', initDragDrop);
