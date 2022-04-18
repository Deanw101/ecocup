


(function ($) {
    "use strict";

// -=-=-=-=-=-=-=-=-=-=-=-=-=-
// -/-/-/-/-/-Cursor/-/-/-/-/-/
// -=-=-=-=-=-=-=-=--=-=-=-=-=-


    var isMobile = false;
    if (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('html').addClass('touch');
        isMobile = true;
    } else {
        $('html').addClass('no-touch');
        isMobile = false;
    }

    var isMacLike = /(Mac)/i.test(navigator.platform);

    var cursor = {
        delay: 8,
        _x: 0,
        _y: 0,
        endX: (window.innerWidth / 2),
        endY: (window.innerHeight / 2),
        cursorVisible: true,
        cursorEnlarged: false,
        $cursor: document.querySelector('.cursor'),
        $cursor1: document.querySelector('.cursor1'),

        init: function () {
            $('body').css('cursor', 'none');

            // Set up element sizes
            this.cursorSize = this.$cursor.offsetWidth;
            this.cursor1Size = this.$cursor1.offsetWidth;

            this.setupEventListeners();
            this.animateDotOutline();
            this.cursorDrag();
            this.cursorExplore();
            this.cursorZoom();
            this.cursorNext();
            this.cursorPrev();
        },

        setupEventListeners: function () {
            var self = this;

            // Anchor hovering
            Array.prototype.slice.call(document.querySelectorAll('  .zoom-cursor, .hover-target')).forEach(function (el) {
                el.addEventListener('mouseover', function () {
                    self.cursorEnlarged = true;
                    self.toggleCursorSize();
                });
                el.addEventListener('mouseout', function () {
                    self.cursorEnlarged = false;
                    self.toggleCursorSize();
                });
            });

            document.addEventListener('mousemove', function (e) {
                // Show the cursor
                self.cursorVisible = true;
                self.toggleCursorVisibility();

                // Position the dot
                self.endX = e.clientX;
                self.endY = e.clientY;
                self.$cursor.style.top = self.endY + 'px';
                self.$cursor.style.left = self.endX + 'px';
            });

            // Hide/show cursor
            document.addEventListener('mouseenter', function (e) {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$cursor.style.opacity = 1;
                self.$cursor1.style.opacity = 1;
            });

            document.addEventListener('mouseleave', function (e) {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$cursor.style.opacity = 0;
                self.$cursor1.style.opacity = 0;
            });
        },

        animateDotOutline: function () {
            var self = this;

            self._x += (self.endX - self._x) / self.delay;
            self._y += (self.endY - self._y) / self.delay;
            self.$cursor1.style.top = self._y + 'px';
            self.$cursor1.style.left = self._x + 'px';

            requestAnimationFrame(this.animateDotOutline.bind(self));
        },

        toggleCursorSize: function () {
            var self = this;

            if (self.cursorEnlarged) {
                self.$cursor1.classList.add('expand');
            } else {
                self.$cursor1.classList.remove('expand');
            }
        },

        toggleCursorVisibility: function () {
            var self = this;

            if (self.cursorVisible) {
                self.$cursor.style.opacity = 1;
                self.$cursor1.style.opacity = 1;
            } else {
                self.$cursor.style.opacity = 0;
                self.$cursor1.style.opacity = 0;
            }
        },

        cursorDrag: function () {
            var self = this;
            $('.cursorDrag').on('mouseenter', function () {
                self.$cursor1.classList.add('drag', 'expand');
            });
            $('.cursorDrag').on('mouseleave', function () {
                self.$cursor1.classList.remove('drag', 'expand');
            });
        },

        cursorExplore: function () {
            var self = this;
            $('.cursorExplore').on('mouseenter', function () {
                self.$cursor1.classList.add('explore');
            });
            $('.cursorExplore').on('mouseleave', function () {
                self.$cursor1.classList.remove('explore');
            });
        },

        cursorZoom: function () {
            var self = this;
            $('.cursorZoom').on('mouseenter', function () {
                self.$cursor1.classList.add('zoom');
            });
            $('.cursorZoom').on('mouseleave', function () {
                self.$cursor1.classList.remove('zoom');
            });
        },

        cursorNext: function () {
            var self = this;
            $('.cursorNext').on('mouseenter', function () {
                self.$cursor1.classList.add('next');
            });
            $('.cursorNext').on('mouseleave', function () {
                self.$cursor1.classList.remove('next');
            });
        },

        cursorPrev: function () {
            var self = this;
            $('.cursorPrev').on('mouseenter', function () {
                self.$cursor1.classList.add('prev');
            });
            $('.cursorPrev').on('mouseleave', function () {
                self.$cursor1.classList.remove('prev');
            });
        }
    }

    if (!isMobile) {
        cursor.init(); //Init custom cursor
    }

    //--------------------------------------------------
        // Magnetic
        //--------------------------------------------------

        $(document).on('mousemove', function (e) {
            $('.magnetic').each(function () {
                if (!isMobile) {
                    magnetic(this, e); //Init effect magnetic
                }
            });
        });

        function magnetic(el, e) {
            var mX = e.pageX,
                mY = e.pageY;
            const obj = $(el);

            const customDist = 20 * obj.data('dist') || 80,
                centerX = obj.offset().left + obj.width() / 2,
                centerY = obj.offset().top + obj.height() / 2;

            var deltaX = Math.floor((centerX - mX)) * -.4,
                deltaY = Math.floor((centerY - mY)) * -.4;

            var distance = calcDistance(obj, mX, mY);

            if (distance < customDist) {
                TweenMax.to(obj, .4, {
                    y: deltaY,
                    x: deltaX
                });
            } else {
                TweenMax.to(obj, .4, {
                    y: 0,
                    x: 0
                });
            }
        }

        function calcDistance(elem, mouseX, mouseY) {
            return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
        }






})(jQuery);
