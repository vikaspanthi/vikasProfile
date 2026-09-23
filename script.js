        const publicationSearch = document.querySelector('#publication-search');
        const publicationItems = [...document.querySelectorAll('#publications .numbered-list li')];
        const publicationCount = document.querySelector('#publication-count');
        const updatePublications = () => {
            const query = publicationSearch.value.trim().toLocaleLowerCase();
            let visible = 0;
            publicationItems.forEach(item => {
                const match = item.textContent.toLocaleLowerCase().includes(query);
                item.hidden = !match;
                if (match) visible++;
            });
            publicationCount.textContent = `${visible} of ${publicationItems.length} records`;
            document.querySelectorAll('#publications h3').forEach(heading => {
                const list = heading.nextElementSibling;
                let empty = list.nextElementSibling;
                if (!empty || !empty.classList.contains('publication-empty')) {
                    empty = document.createElement('p');
                    empty.className = 'publication-empty';
                    empty.textContent = 'No matching records in this section.';
                    list.after(empty);
                }
                empty.hidden = [...list.children].some(item => !item.hidden);
            });
        };
        publicationSearch.addEventListener('input', updatePublications);
        updatePublications();

        const topButton = document.querySelector('.back-top');
        const progress = document.querySelector('.reading-progress');
        const paletteButtons = [...document.querySelectorAll('.palette-dot')];
        paletteButtons.forEach(button => button.addEventListener('click', () => {
            document.body.dataset.palette = button.dataset.color;
            paletteButtons.forEach(choice => choice.setAttribute('aria-pressed', String(choice === button)));
        }));
        const navLinks = [...document.querySelectorAll('.hud-links a')];
        const onScroll = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            progress.style.transform = `scaleX(${scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0})`;
            topButton.classList.toggle('visible', window.scrollY > 550);
            let current = 'identity';
            navLinks.forEach(link => {
                const target = document.querySelector(link.getAttribute('href'));
                if (target && target.getBoundingClientRect().top <= 180) current = target.id;
            });
            navLinks.forEach(link => {
                const active = link.getAttribute('href') === `#${current}`;
                link.classList.toggle('active', active);
                if (active) link.setAttribute('aria-current', 'location');
                else link.removeAttribute('aria-current');
            });
        };
        topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const observer = new IntersectionObserver(entries => entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            }), { threshold: .06 });
            document.querySelectorAll('.metric-card, .cyber-card').forEach(element => {
                element.classList.add('reveal');
                observer.observe(element);
            });
        }
