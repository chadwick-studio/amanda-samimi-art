//detects mobile browsers: remove main content if on mobile (lightbox broken on mobile)
let hasTouchScreen = false;
if ("maxTouchPoints" in navigator) {
	hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
	hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
	const mQ = matchMedia?.("(pointer:coarse)");
	if (mQ?.media === "(pointer:coarse)") {
		hasTouchScreen = !!mQ.matches;
	} else if ("orientation" in window) {
		hasTouchScreen = true; // deprecated, but good fallback
	}
}


// variables
const galleryItems = document.querySelectorAll('.gallery__item');
const galleryItemsArray = Array.from(galleryItems);
const lightboxImage = document.querySelector('.lightbox__image');
const lightboxCaption = document.querySelector('.lightbox__figure--caption');
let activeLightboxFigure;
const lightbox = document.querySelector('.lightbox');
const lightboxButtons = document.querySelectorAll('.lightbox__button');
const lightboxButtonLeft = document.querySelector('.lightbox__button--left');
const lightboxButtonRight = document.querySelector('.lightbox__button--right');
const lightboxFigure = document.querySelector('.lightbox__figure');
const header = document.querySelector('header');
const main = document.querySelector('main');
const bodyIsLightbox = document.querySelector('body:not(header):not(main)');

//functions
const showLightbox = () => {
	lightbox.classList.add('lightbox--active');
	bodyScrollLock.disableBodyScroll(lightbox);
	if (hasTouchScreen) {
		header.classList.add('body--inactive');
		main.classList.add('body--inactive')
		lightbox.style.backgroundColor = 'transparent';
	}
}

const hideLightbox = () => {
	lightbox.classList.remove('lightbox--active');
	bodyScrollLock.enableBodyScroll(lightbox);
	if (hasTouchScreen) {
		header.classList.remove('body--inactive');
		main.classList.remove('body--inactive')
	}
}

const setActiveLightboxFigure = (figure) => {
	lightboxImage.src = figure.firstElementChild.src;
	lightboxCaption.innerHTML = figure.lastElementChild.innerHTML;
	activeLightboxFigure = galleryItemsArray.indexOf(figure);
	switch (activeLightboxFigure) {
		case 0:
			lightboxButtonRight.classList.remove('lightbox__button--inactive');
			lightboxButtonLeft.classList.add('lightbox__button--inactive');
			break;
		case galleryItemsArray.length - 1:
			lightboxButtonLeft.classList.remove('lightbox__button--inactive');
			lightboxButtonRight.classList.add('lightbox__button--inactive');
			break;
		default:
			removeLightboxButtonsInactiveClass();
	}
}

const setLightboxButtonsInactive = () => {
	lightboxButtonLeft.classList.add('lightbox__button--inactive');
	lightboxButtonRight.classList.add('lightbox__button--inactive');
}

const removeLightboxButtonsInactiveClass = () => {
	lightboxButtons.forEach(button => {
		button.classList.remove('lightbox__button--inactive');
	})
}

const removeLightboxButtonAnimation = () => {
	lightboxButtons.forEach(button => {
		setTimeout(function () { button.blur() }, 200);
	})
}

const transitionLightboxSlideLeft = () => {
	lightboxButtonLeft.focus();
	activeLightboxFigure === 0 ? setActiveLightboxFigure(galleryItemsArray[galleryItemsArray.length - 1]) :
		setActiveLightboxFigure(galleryItemsArray[activeLightboxFigure - 1]);
	removeLightboxButtonAnimation();
}

const transitionLightboxSlideRight = () => {
	lightboxButtonRight.focus();
	activeLightboxFigure === galleryItemsArray.length - 1 ? setActiveLightboxFigure(galleryItemsArray[0]) :
		setActiveLightboxFigure(galleryItemsArray[activeLightboxFigure + 1]);
	removeLightboxButtonAnimation();
}

const transitionLightboxSlideHandler = (changeImage) => {
	changeImage.includes('left') ? transitionLightboxSlideLeft() : transitionLightboxSlideRight();
}

galleryItems.forEach(item => {
	item.addEventListener('click', () => {
		lightboxImage.classList.remove('zoom--active');
		showLightbox();
		setActiveLightboxFigure(item);
	})
	item.addEventListener('keydown', (event) => {
		if (event.key == 'Enter') {
			lightboxImage.classList.remove('zoom--active');
			showLightbox();
			setActiveLightboxFigure(item);
		}
	})
})

lightbox.addEventListener('click', (event) => {
	if (!lightboxImage.contains(event.target)) {
		hideLightbox();
		setLightboxButtonsInactive();
		setTimeout(() => {
			lightboxImage.src = '';
		}, 300);
	}
})

bodyIsLightbox.addEventListener('keydown', (event) => {
	if (event.key == 'q' || event.key == 'Escape') {
		hideLightbox();
		setLightboxButtonsInactive();
	}
})

lightboxButtons.forEach(button => {
	button.addEventListener('click', (event) => {
		event.stopPropagation();
		transitionLightboxSlideHandler(event.currentTarget.className);
	})
})

bodyIsLightbox.addEventListener('keydown', (event) => {
	if (!lightbox.classList.contains('lightbox--active')) return;
	if (event.key.includes('Left') || event.key.includes('Right')) {
		transitionLightboxSlideHandler(event.key.toLowerCase());
	}
})

window.addEventListener('DOMContentLoaded', () => {
	setLightboxButtonsInactive();
})

/* image magnifier */

//variables
const lightboxImageWrapper = document.querySelector('.lightbox__image--zoom--wrapper');

//functions
const zoom = (event) => {
	if (lightboxImage.classList.contains('zoom--active')) {
		const zoomer = event.currentTarget;
		event.offsetX ? offsetX = event.offsetX : offsetX = event.touches[0].pageX
		event.offsetY ? offsetY = event.offsetY : offsetY = event.touches[0].pageY
		x = offsetX / zoomer.offsetWidth * 100
		y = offsetY / zoomer.offsetHeight * 100
		zoomer.style.backgroundPosition = x + '% ' + y + '%';
	}
}

let zoomMobile = (event) => {
	if (lightboxImage.classList.contains('zoom--active')) {
		const rect = event.target.getBoundingClientRect();
		event.offsetX = event.targetTouches[0].pageX - rect.left;
		event.offsetY = event.targetTouches[0].pageY - rect.top;
		const zoomer = event.currentTarget;

		event.offsetX ? offsetX = event.offsetX : offsetX = event.touches[0].pageY
		event.offsetY ? offsetY = event.offsetY : offsetY = event.touches[0].pageX
		x = offsetX / zoomer.offsetWidth * 100
		y = offsetY / zoomer.offsetHeight * 100
		zoomer.style.backgroundPosition = x + '% ' + y + '%';
	}
}

//event listeners
lightboxImageWrapper.addEventListener('mousemove', (event) => {
	zoom(event);
})

lightboxImageWrapper.addEventListener('click', (event) => {
	lightboxImage.classList.toggle('zoom--active');
	if (lightboxImage.classList.contains('zoom--active')) {
		lightboxImageWrapper.style.backgroundImage = `url(${lightboxImage.src})`;
		zoom(event);
	}
})

lightboxImageWrapper.addEventListener('mouseleave', (event) => {
	lightboxImage.classList.remove('zoom--active');
})

lightboxImageWrapper.addEventListener('touchstart', (event) => {
	event.preventDefault();
	event.stopPropagation();
	lightboxImage.classList.add('zoom--active');
	zoomMobile(event);
	lightboxImageWrapper.style.backgroundImage = `url(${lightboxImage.src})`;
}, { passive: true })

lightboxImageWrapper.addEventListener('touchmove', (event) => {
	const actualTarget = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
	if (actualTarget == document.querySelector('.lightbox__image')
		&& (lightboxImage.classList.contains('zoom--active'))) {
		{ zoomMobile(event); }
	} else {
		lightboxImage.classList.remove('zoom--active');
	}
}, { passive: true })

lightboxImageWrapper.addEventListener('touchend', (event) => {
	lightboxImage.classList.remove('zoom--active');
})
