import html from '!!raw-loader!./index.html';


export const createSlider = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);
// 슬라이더 값 범위 설정
    const MIN_VALUE = 0;
    const MAX_VALUE = 50;
    let currentValue = 25; // 초기값

    // 요소 참조
    const slider = document.getElementById('verticalSlider');
    const handle = document.getElementById('sliderHandle');
    const tooltip = document.getElementById('sliderTooltip');

    /**
     * 슬라이더 위치와 툴팁을 갱신하는 함수
     * @param {number} value - 변경할 값
     */
    function updateSliderPosition(value) {
        // 범위를 벗어나지 않도록 보정
        if (value < MIN_VALUE) value = MIN_VALUE;
        if (value > MAX_VALUE) value = MAX_VALUE;
        currentValue = value;

        // 0~1 사이 비율(ratio) 계산
        const ratio = (currentValue - MIN_VALUE) / (MAX_VALUE - MIN_VALUE);

        // 슬라이더 컨테이너 높이
        const sliderHeight = slider.clientHeight;

        // (비율이 1일 때 맨 위, 0일 때 맨 아래가 되도록)
        // 세로 방향 위치를 반전하여 계산
        const handleY = sliderHeight - (sliderHeight * ratio);

        // 핸들의 중심을 맞추기 위해 높이의 절반만큼 보정
        handle.style.top = (handleY - handle.clientHeight / 2) + 'px';

        // 툴팁 위치도 핸들과 동일한 세로 좌표로
        tooltip.style.top = handle.style.top;
        tooltip.textContent = Math.round(currentValue);
    }

    // 드래그 상태 관리
    let isDragging = false;

    /**
     * 마우스 눌렀을 때 (드래그 시작)
     */
    function onMouseDown() {
        isDragging = true;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    /**
     * 드래그 중 마우스 이동
     */
    function onMouseMove(e) {
        if (!isDragging) return;

        // 슬라이더 컨테이너의 위치 & 크기
        const rect = slider.getBoundingClientRect();
        const sliderHeight = slider.clientHeight;

        // 슬라이더 윗변 기준으로부터 마우스 포인터까지의 거리
        const offsetY = e.clientY - rect.top;

        // offsetY => ratio (0 ~ 1)
        // offsetY가 0일 때 ratio=0(슬라이더 맨 위), sliderHeight일 때 ratio=1(슬라이더 맨 아래)
        // 세로 슬라이더를 "아래->위"로 값이 커지게 하고 싶다면 ratio를 반전(1 - ratio) 해야 함
        let ratio = offsetY / sliderHeight;
        ratio = 1 - ratio; // 값이 클수록 슬라이더 상단에 위치

        // 비율을 실제 값으로 변환
        const value = MIN_VALUE + ratio * (MAX_VALUE - MIN_VALUE);
        updateSliderPosition(value);
    }

    /**
     * 마우스 뗐을 때 (드래그 종료)
     */
    function onMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    // 핸들에 마우스 이벤트 연결
    handle.addEventListener('mousedown', onMouseDown);

    // 슬라이더 트랙 아무 곳이나 클릭했을 때도 핸들이 해당 위치로 이동하도록 설정
    slider.addEventListener('click', (e) => {
        // 이미 핸들을 클릭했다면(드래그 시작 시) 따로 처리할 필요 없음
        if (e.target === handle) return;

        const rect = slider.getBoundingClientRect();
        const sliderHeight = slider.clientHeight;
        const offsetY = e.clientY - rect.top;

        let ratio = offsetY / sliderHeight;
        ratio = 1 - ratio;

        const value = MIN_VALUE + ratio * (MAX_VALUE - MIN_VALUE);
        updateSliderPosition(value);
    });

    // 초기 위치 설정
    updateSliderPosition(currentValue);

    return wrapper.firstElementChild;
}