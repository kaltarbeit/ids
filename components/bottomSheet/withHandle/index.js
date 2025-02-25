import '../bottomSheet.css';
import '../../button/button.css';
import html from '!!raw-loader!./index.html';

export const createBottomSheet = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);
    const bottomSheet = wrapper.querySelector('.ids2-bottom-sheet');
    const bottomSheetContainer = wrapper.querySelector('.ids2-bottom-sheet-container');
    const backdrop = wrapper.querySelector('.ids2-backdrop');
    const button = wrapper.querySelector('.ids2-button');
    const closeButton = wrapper.querySelector('.ids2-bottom-sheet-close');
    const handler = wrapper.querySelector('.ids2-bottom-sheet-handle');


    bottomSheet.classList.add('ids2-bottom-sheet-hide');

    const showBottomSheet = () => {
        bottomSheet.style.display = 'block';
        bottomSheetContainer.style.display = 'flex';
        handler.style.display = 'block';
        closeButton.style.display = 'none';
        setTimeout(() => {
            bottomSheet.classList.remove('ids2-bottom-sheet-hide');
            backdrop.classList.remove('ids2-backdrop-hide');
        }, 10);
    }

    const fullBottomSheet = () => {
        bottomSheet.classList.add('ids2-bottom-sheet-full');
    }

    const hideBottomSheet = () => {
        bottomSheet.classList.add('ids2-bottom-sheet-hide');
        backdrop.classList.add('ids2-backdrop-hide');
        bottomSheet.classList.remove('ids2-bottom-sheet-full');
    }

    button.addEventListener('click', showBottomSheet);
    closeButton.addEventListener('click', hideBottomSheet);

    bottomSheetContainer.addEventListener("transitionend", () => {
        if(bottomSheet.classList.contains('ids2-bottom-sheet-hide')) {
            bottomSheet.style.display = 'none';
            bottomSheetContainer.style.display = 'none';
        }
    });


    let isDragging = false;
    let startY = 0;
    let currentY = 0;
    let bottomSheetStartTop = 0;

    // 핸들러 드래그 기능 추가
    const dragStart = (event) => {
        isDragging = true;
        startY = event.type === 'touchstart' ? event.touches[0].clientY : event.clientY;
        bottomSheetStartTop = parseInt(bottomSheetContainer.style.top || '50%', 10); // 현재 top 값 저장
        bottomSheetContainer.classList.add('dragging'); // 드래그 상태 표시 (CSS 수정 가능)
    };

    const dragMove = (event) => {
        if (!isDragging) return;

        currentY = event.type === 'touchmove' ? event.touches[0].clientY : event.clientY;
        const deltaY = currentY - startY;
        const percent = deltaY / (window.innerHeight / 100)
        const newTop = Math.max(0, bottomSheetStartTop + percent); // top은 최소 0으로 제한
        bottomSheetContainer.style.top = `${newTop}%`;
    };

    const dragEnd = () => {
        if (!isDragging) return;

        isDragging = false;
        bottomSheetContainer.classList.remove('dragging');

        // 드래그가 끝난 위치에 따라 아래로 닫거나 원 위치 유지
        const currentTop = parseInt(bottomSheetContainer.style.top, 10);

        if (currentTop > 60) { // 화면 아래로 80% 이상 내려가면 닫기
            hideBottomSheet();
        } else if (currentTop < 50) { // 화면 아래로 80% 이상 내려가면 닫기
            fullBottomSheet();
            bottomSheetContainer.style.top = ''; // 원래 위치로 복귀
            handler.style.display = 'none';
            closeButton.style.display = 'block';
        } else {
            bottomSheetContainer.style.top = '60%'; // 원래 위치로 복귀
        }
    };

    handler.addEventListener('mousedown', dragStart);
    handler.addEventListener('touchstart', dragStart);

    document.addEventListener('mousemove', dragMove);
    document.addEventListener('touchmove', dragMove);

    document.addEventListener('mouseup', dragEnd);
    document.addEventListener('touchend', dragEnd);


    setTimeout(() => {
        showBottomSheet();
    }, 500);

    return wrapper.firstElementChild;
}