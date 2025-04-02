import html from '!!raw-loader!./index.html';


export const createSlider = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);
// 슬라이더 값 범위 설정
    const MIN_VALUE = 0;
    const MAX_VALUE = 50;

    let currentSlider;
    let isBetweenMin = false;

    // 요소 참조
    const sliders = wrapper.querySelectorAll('.ids2-slider');

    /**
     * 슬라이더 위치와 툴팁을 갱신하는 함수
     */
    function updateSliderPosition(slider, value, isMin = false) {
        const handleMax = slider.querySelector('.ids2-slider__handle');
        const handleMin = slider.querySelector('.ids2-slider__handle-min');
        const trackRange = slider.querySelector('.ids2-slider__track-range');

        const isVertical = slider.classList.contains('ids2-slider__vertical');

        // 범위를 벗어나지 않도록 보정
        if (value < MIN_VALUE) value = MIN_VALUE;
        if (value > MAX_VALUE) value = MAX_VALUE;

        if(isMin) {
            slider.dataset.minValue = isVertical ? value : MAX_VALUE - value;
        } else {
            slider.dataset.value = isVertical ? value : MAX_VALUE - value;
        }

        // 0~1 사이 비율(ratio) 계산
        const ratio = (value - MIN_VALUE) / (MAX_VALUE - MIN_VALUE);

        // 슬라이더 컨테이너 높이
        let sliderPos;

        if(isVertical)
            sliderPos = slider.clientHeight;
        else
            sliderPos = slider.clientWidth;

        // (비율이 1일 때 맨 위, 0일 때 맨 아래가 되도록)
        // 세로 방향 위치를 반전하여 계산
        const handlePos = sliderPos - (sliderPos * ratio);

        if(isVertical) {
            if(isMin) {
                handleMin.style.top = handlePos + 'px';
                trackRange.style.bottom = sliderPos - handlePos + 'px';
            } else {
                handleMax.style.top = handlePos + 'px';
                trackRange.style.top = handleMax.style.top;
            }
        } else {
            if(isMin) {
                handleMin.style.left = handlePos + 'px';
                trackRange.style.left = handlePos + 'px';
            } else {
                handleMax.style.left = handlePos + 'px';
                trackRange.style.right = sliderPos - handlePos + 'px';
            }
        }
    }

    // 드래그 상태 관리
    let isDragging = false;

    /**
     * 마우스 눌렀을 때 (드래그 시작)
     */
    function onMouseDown(slider, isMin = false) {
        isDragging = true;
        currentSlider = slider;
        isBetweenMin = isMin;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    /**
     * 드래그 중 마우스 이동
     */
    function onMouseMove(e) {

        if (!isDragging || !currentSlider) return;

        const isVertical = currentSlider.classList.contains('ids2-slider__vertical');
        const isSnap = currentSlider.classList.contains('ids2-slider__snap');

        // 슬라이더 컨테이너의 위치 & 크기
        const rect = currentSlider.getBoundingClientRect();


        let sliderPos;
        let offset;

        if(isVertical) {
            sliderPos = currentSlider.clientHeight;
            offset = e.clientY - rect.top;
        } else {
            sliderPos = currentSlider.clientWidth;
            offset = e.clientX - rect.left;
        }

        // offsetY => ratio (0 ~ 1)
        // offsetY가 0일 때 ratio=0(슬라이더 맨 위), sliderHeight일 때 ratio=1(슬라이더 맨 아래)
        // 세로 슬라이더를 "아래->위"로 값이 커지게 하고 싶다면 ratio를 반전(1 - ratio) 해야 함
        let ratio = offset / sliderPos;
        ratio = 1 - ratio; // 값이 클수록 슬라이더 상단에 위치

        // 비율을 실제 값으로 변환
        const value = MIN_VALUE + ratio * (MAX_VALUE - MIN_VALUE);

        if(isSnap) {

            const steps = [0, 8, 17, 25, 33, 42, 50];

            const step = steps.find(step => (
                value >= (step - 1) && value < (step + 1)
            ));

            if(!isNaN(step)) {
                if(isVertical) {
                    if(isBetweenMin) {
                        if(step > Number(currentSlider.dataset.value) - 5) return;
                    } else {
                        if(step < Number(currentSlider.dataset.minValue) + 5) return;
                    }
                } else {
                    const currentValue = MAX_VALUE - step;
                    if(isBetweenMin) {
                        if(currentValue > Number(currentSlider.dataset.value) - 5) return;
                    } else {
                        if(currentValue < Number(currentSlider.dataset.minValue) + 5) return;
                    }
                }

                updateSliderPosition(currentSlider, step, isBetweenMin);
            }
        } else {

            if(isVertical) {
                if(isBetweenMin) {
                    if(value > Number(currentSlider.dataset.value) - 5) return;
                } else {
                    if(value < Number(currentSlider.dataset.minValue) + 5) return;
                }
            } else {
                const currentValue = MAX_VALUE - value;
                if(isBetweenMin) {
                    if(currentValue > Number(currentSlider.dataset.value) - 5) return;
                } else {
                    if(currentValue < Number(currentSlider.dataset.minValue) + 5) return;
                }
            }

            updateSliderPosition(currentSlider, value, isBetweenMin);
        }
    }

    /**
     * 마우스 뗐을 때 (드래그 종료)
     */
    function onMouseUp() {
        isDragging = false;

        document.removeEventListener('mousemove', e => onMouseMove(e));
        document.removeEventListener('mouseup', e => onMouseUp(e));
    }

    setTimeout(() => {

        sliders.forEach(slider => {

            const handle = slider.querySelector('.ids2-slider__handle');
            const handleMin = slider.querySelector('.ids2-slider__handle-min');

            const isVertical = slider.classList.contains('ids2-slider__vertical');

            // 핸들에 마우스 이벤트 연결
            handle.addEventListener('mousedown', () => onMouseDown(slider));

            // 핸들에 마우스 이벤트 연결
            handleMin.addEventListener('mousedown', () => onMouseDown(slider, true));

            // 초기 위치 설정
            if(isVertical) {
                updateSliderPosition(slider, Number(slider.dataset.value));
                updateSliderPosition(slider, Number(slider.dataset.minValue), true);
            } else {
                updateSliderPosition(slider, MAX_VALUE - Number(slider.dataset.value));
                updateSliderPosition(slider, MAX_VALUE - Number(slider.dataset.minValue), true);
            }
        });
    }, 10);

    return wrapper.firstElementChild;
}