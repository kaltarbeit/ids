import html from '!!raw-loader!./index.html';


export const createSlider = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);
// 슬라이더 값 범위 설정
    const MIN_VALUE = 0;
    const MAX_VALUE = 50;

    let currentSlider;

    // 요소 참조
    const sliders = wrapper.querySelectorAll('.ids2-slider');

    /**
     * 슬라이더 위치와 툴팁을 갱신하는 함수
     */
    function updateSliderPosition(slider, value) {
        const handle = slider.querySelector('.ids2-slider__handle');
        const tooltip = slider.querySelector('.ids2-slider__tooltip');
        const trackRange = slider.querySelector('.ids2-slider__track-range');

        const isVertical = slider.classList.contains('ids2-slider__vertical');

        // 범위를 벗어나지 않도록 보정
        if (value < MIN_VALUE) value = MIN_VALUE;
        if (value > MAX_VALUE) value = MAX_VALUE;

        slider.dataset.value = value;

        // 0~1 사이 비율(ratio) 계산
        const ratio = (value - MIN_VALUE) / (MAX_VALUE - MIN_VALUE);

        // 슬라이더 컨테이너 높이
        let sliderPos;

        if(isVertical)
            sliderPos = slider.clientHeight - handle.offsetHeight;
        else
            sliderPos = slider.clientWidth - handle.offsetWidth;

        // (비율이 1일 때 맨 위, 0일 때 맨 아래가 되도록)
        // 세로 방향 위치를 반전하여 계산
        const handlePos = sliderPos - (sliderPos * ratio);

        if(isVertical) {
            handle.style.top = handlePos + 'px';
            tooltip.style.top = handle.style.top;
            trackRange.style.top = handle.style.top;
        } else {
            handle.style.left = handlePos + 'px';
            tooltip.style.left = handle.style.left;
            trackRange.style.width = handle.style.left;
        }
    }

    // 드래그 상태 관리
    let isDragging = false;

    /**
     * 마우스 눌렀을 때 (드래그 시작)
     */
    function onMouseDown(slider) {
        isDragging = true;
        currentSlider = slider;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    /**
     * 드래그 중 마우스 이동
     */
    function onMouseMove(e) {

        if (!isDragging || !currentSlider) return;

        const handle = currentSlider.querySelector('.ids2-slider__handle');

        const isVertical = currentSlider.classList.contains('ids2-slider__vertical');

        // 슬라이더 컨테이너의 위치 & 크기
        const rect = currentSlider.getBoundingClientRect();


        let sliderPos;
        let offset;

        if(isVertical) {
            sliderPos = currentSlider.clientHeight - handle.offsetHeight;
            offset = e.clientY - rect.top;
        } else {
            sliderPos = currentSlider.clientWidth - handle.offsetWidth;
            offset = e.clientX - rect.left;
        }

        // offsetY => ratio (0 ~ 1)
        // offsetY가 0일 때 ratio=0(슬라이더 맨 위), sliderHeight일 때 ratio=1(슬라이더 맨 아래)
        // 세로 슬라이더를 "아래->위"로 값이 커지게 하고 싶다면 ratio를 반전(1 - ratio) 해야 함
        let ratio = offset / sliderPos;
        ratio = 1 - ratio; // 값이 클수록 슬라이더 상단에 위치

        // 비율을 실제 값으로 변환
        const value = MIN_VALUE + ratio * (MAX_VALUE - MIN_VALUE);

        updateSliderPosition(currentSlider, value);
    }

    /**
     * 마우스 뗐을 때 (드래그 종료)
     */
    function onMouseUp() {
        isDragging = false;

        document.removeEventListener('mousemove', e => onMouseMove(e));
        document.removeEventListener('mouseup', e => onMouseUp(e));
    }

    /**
     * 마우스 뗐을 때 (드래그 종료)
     */
    function onMouseHover(slider) {
        const tooltip = slider.querySelector('.ids2-slider__tooltip');
        tooltip.style.display = 'block';
    }

    /**
     * 마우스 뗐을 때 (드래그 종료)
     */
    function onMouseLeave(slider) {
        if(isDragging) return;
        const tooltip = slider.querySelector('.ids2-slider__tooltip');
        tooltip.style.display = 'none';
    }

    setTimeout(() => {

        sliders.forEach(slider => {

            const handle = slider.querySelector('.ids2-slider__handle');

            const isVertical = slider.classList.contains('ids2-slider__vertical');

            // 핸들에 마우스 이벤트 연결
            handle.addEventListener('mousedown', () => onMouseDown(slider));
            handle.addEventListener('mouseenter', () => onMouseHover(slider));
            handle.addEventListener('mouseleave', () => onMouseLeave(slider));

            // 슬라이더 트랙 아무 곳이나 클릭했을 때도 핸들이 해당 위치로 이동하도록 설정
            slider.addEventListener('click', (e) => {
                // 이미 핸들을 클릭했다면(드래그 시작 시) 따로 처리할 필요 없음
                if (e.target === handle) return;

                const rect = slider.getBoundingClientRect();


                let sliderPos;
                let offset;

                if(isVertical) {
                    sliderPos = slider.clientHeight - handle.offsetHeight;
                    offset = e.clientY - rect.top;
                } else {
                    sliderPos = slider.clientWidth - handle.offsetWidth;
                    offset = e.clientX - rect.left;
                }

                let ratio = offset / sliderPos;
                ratio = 1 - ratio;

                const value = MIN_VALUE + ratio * (MAX_VALUE - MIN_VALUE);
                updateSliderPosition(slider, value);
            });

            // 초기 위치 설정
            updateSliderPosition(slider, Number(slider.dataset.value));
        });
    }, 10);

    return wrapper.firstElementChild;
}