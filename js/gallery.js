function bounce(element) {
    if (!element.classList.contains("bounce")) {
        element.classList.add("bounce");
        setTimeout(() => {
            element.classList.remove("bounce");
        }, 1000);
    }
}

.section-label {
    animation: labelBounce 0.5s ease;
    background: #d3d3d3;
    padding: 5px 10px;
    border-radius: 4px;
}

@keyframes labelBounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(-50%);
    }
    40% {
        transform: translateY(-60%);
    }
    60% {
        transform: translateY(-40%);
    }
}
