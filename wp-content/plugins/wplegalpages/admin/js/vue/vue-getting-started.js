$ = jQuery.noConflict();

Vue.component('HeaderSection', {
    render(createElement) {
        return createElement('header', {
            staticClass: 'wplegal-header-section'
        }, [createElement('h1',{
            staticClass: "wplegal-header-logo"
        },[createElement('div',{
            staticClass: "wplegal-logo"
        },[createElement('div',{
            staticClass: "wplegal-bg-img"
        })])])]);
    }
});

Vue.component('WelcomeSection', {
    render(createElement) {
        return createElement('div', {
            staticClass: 'wplegal-welcome-section'
        }, [createElement('div', {
            staticClass: 'wplegal-section-title'
        }, [createElement('p', {
            staticClass: 'wplegal-title-heading',
            domProps: {
                textContent: obj.welcome_text
            }
        }), createElement('p', {
            staticClass: 'wplegal-title-subheading',
            domProps: {
                textContent: obj.welcome_subtext
            }
        })]),
        createElement('div', {
            staticClass: 'wplegal-section-content'
        }, [createElement('p', {
            domProps: {
                innerHTML: obj.welcome_description
            }
        })])]);
    }
});

Vue.component('VideoSection', {
    render(createElement) {
        return createElement('div', {
            staticClass: 'wplegal-video-section'
        }, [createElement('iframe', {
            attrs: {
                width: '746',
                height: '350',
                src: obj.video_url
            },
        })]);
    }
});

Vue.component('HelpSection', {
    methods: {
        createHelpCards: function(createElement) {
            var helpCards = [];
            for (const [key, value] of Object.entries(obj.help_section)){

                var helpCard = [createElement('div', {
                    staticClass: 'wplegal-help-card'
                },[createElement('div', {
                    staticClass: 'wplegal-help-card-top',
                    },[createElement('div', {
                    staticClass: 'wplegal-help-card-icon',
                    domProps: {
                        innerHTML: '<img class="wplegal-help-img" src='+ value.image_src + key + '.png >'
                    }
                }),
                createElement('div', {
                    staticClass: 'wplegal-help-card-description'
                },
                [createElement('h3', {
                    staticClass: 'wplegal-help-card-heading',
                    domProps: {
                        innerHTML: value.title
                    }
                }),
                createElement('p', {
                    staticClass: 'wplegal-help-card-summary',
                    domProps: {
                        innerHTML: value.description
                    }
                }),])]),
                createElement('p', {
                    staticClass: 'wplegal-help-card-link',
                    domProps: {
                        innerHTML: '<a  target="_blank" href=' + value.link +' >' + value.link_title + '</a>'
                    }
                })])];
                helpCards.push(helpCard);
            };
            return helpCards;

        }
    },
    render(createElement) {
        var self = this;
        return createElement('div', {
            staticClass: 'wplegal-help-section',
            attrs:{
                display: 'flex',
                justifyContent:'space-between',
            }
        }, [self.createHelpCards(createElement)]);
    }
});

Vue.component('TermsSection', {
    data: function() {
        return {
            accept_terms: {
                checked: !1
            }
        }
    },
    methods: {
        labelClass: function() {
            var s = '';
            if(this.isChecked()) {
                s += 'wplegal-styled-checkbox-label-checked'
            }
            if(this.isDisabled()) {
                s += ' wplegal-styled-checkbox-label-disabled';
            }
            return s;
        },
        titleClass: function() {
            var s = 'wplegal-styled-checkbox';
            if(this.isChecked()) {
                s += ' wplegal-styled-checkbox-checked';
            }
            return s;
        },
        isDisabled: function() {
            if(this.$parent.disabled) {
                return true;
            }
            return false;
        },
        isChecked: function() {
            if(this.accept_terms.checked) {
                return true;
            }
            return false;
        },
        updateSettings: function() {
            this.accept_terms.checked = !this.accept_terms.checked;
        },
        handleSubmit: function() {
            var data = {};
            $('.wplegal-input-checkbox input[type="checkbox"]').each(function(){
                if(this.checked) {
                    data[this.name] = this.value;
                }
            });
            $.post(obj.ajax_url,{'action':'save_accept_terms','data':data,'nonce':obj.ajax_nonce}).then((response => {
                if(response.success) {
                    this.$parent.disabled = 1;
                    location.reload();
                }
            }))

        }
    },
    mounted: function(){
        $.get(obj.ajax_url,{'action':'get_accept_terms','nonce':obj.ajax_nonce}).then((response => {
            if(response.success) {
                if(response.data == '1') {
                    this.$parent.disabled = 1;
                    this.accept_terms.checked = 1;
                }

            }
        }))
    },
    render(createElement) {
        var self = this;
        return createElement('div', {
            staticClass: 'wplegal-terms-section'
        }, [createElement('div', {
            staticClass: 'wplegal-section-content'
        }, [createElement('p', {
            domProps: {
                innerHTML: obj.terms.text
            }
        }),
        createElement('p', {
            domProps: {
                textContent: obj.terms.subtext
            }
        }),
        createElement('form', {
            staticClass: 'wplegal-input-checkbox',
            on: {
                submit: function(e) {
                    return e.preventDefault(),
                        self.handleSubmit(e);
                }
            }
        }, [createElement('label',{
            class: this.labelClass()
        },[createElement('span', {
            class: this.titleClass()
        }),
        createElement('input',{
            attrs:{
                type:'checkbox',
                name:'lp_accept_terms'
            },
            domProps: {
                value: 1,
                checked: this.isChecked()
            },
            on: {
                change: function(event) {
                    event.preventDefault();
                    event.target.checked = !event.target.checked;
                    self.updateSettings();
                }
            }
        }),createElement('span',{
            domProps: {
                innerHTML: obj.terms.input_text
            }
        })]),
        this.$parent.disabled ? [] : createElement('button',{
            staticClass: 'wplegal-button',
            attrs: {
                type: 'submit',
                name: 'accept_terms'
            },
            domProps: {
                textContent: obj.terms.button_text
            }
        })])])]);
    }
});

Vue.component('SettingsSection', {
    render(createElement) {
        return createElement('div', {
            staticClass: 'wplegal-settings-section'
        }, [createElement('div', {
            staticClass: 'wplegal-section-content'
        }, [createElement('p',{
            domProps: {
                textContent: obj.configure.text
            }
        }), createElement('a', {
            staticClass: 'wplegal-button',
            domProps: {
                textContent: obj.configure.button_text,
                href:obj.configure.url
            }
        })])]);
    }
});

Vue.component('PagesSection', {
    render(createElement) {
        return createElement('div', {
            staticClass: 'wplegal-pages-section'
        }, [createElement('div', {
            staticClass: 'wplegal-section-content'
        }, [createElement('p',{
            domProps: {
                textContent: obj.create.text
            }
        }), createElement('a', {
            staticClass: 'wplegal-button',
            domProps: {
                textContent: obj.create.button_text,
                href:obj.create.url
            }
        })])]);
    }
});

Vue.component('FeaturesSection', {
    render(createElement) {
        return createElement('div', {
            staticClass: 'wplegal-features-section'
        }, [createElement('div', {
            staticClass: 'wplegal-section-title'
        }, [createElement('p', {
            staticClass: 'wplegal-title-heading',
            domProps: {
                textContent: obj.features.heading
            }
        }), createElement('p', {
            staticClass: 'wplegal-title-subheading',
            domProps: {
                textContent: obj.features.subheading
            }
        })]), createElement('div',{
            staticClass: 'wplegal-section-content'
        }, [createElement('div', {
            staticClass: 'wplegal-feature'
        }, [createElement('div', {
            staticClass: 'wplegal-feature-icon'
        }, [createElement('img',{
            domProps:{
                src: obj.image_url + 'powerful-yet-simple.png'
            }
        })]), createElement('div', {
            staticClass: 'wplegal-feature-content'
        }, [createElement('p', {
            staticClass: 'wplegal-feature-title',
            domProps: {
                textContent: obj.features.powerful_text
            }
        }), createElement('p',{
            staticClass: 'wplegal-feature-text',
            domProps: {
                textContent: obj.features.powerful_desc
            }
        })])]), createElement('div', {
            staticClass: 'wplegal-feature'
        }, [createElement('div', {
            staticClass: 'wplegal-feature-icon'
        }, [createElement('img',{
            domProps:{
                src: obj.image_url + 'pre-built-templates.png'
            }
        })]), createElement('div', {
            staticClass: 'wplegal-feature-content'
        }, [createElement('p', {
            staticClass: 'wplegal-feature-title',
            domProps: {
                textContent: obj.features.prebuilt_text
            }
        }), createElement('p',{
            staticClass: 'wplegal-feature-text',
            domProps: {
                textContent: obj.features.prebuilt_desc
            }
        })])]), createElement('div', {
            staticClass: 'wplegal-feature'
        }, [createElement('div', {
            staticClass: 'wplegal-feature-icon'
        }, [createElement('img',{
            domProps:{
                src: obj.image_url + 'editable-templates.png'
            }
        })]), createElement('div', {
            staticClass: 'wplegal-feature-content'
        }, [createElement('p', {
            staticClass: 'wplegal-feature-title',
            domProps: {
                textContent: obj.features.editable_text
            }
        }), createElement('p',{
            staticClass: 'wplegal-feature-text',
            domProps: {
                textContent: obj.features.editable_desc
            }
        })])]), createElement('div', {
            staticClass: 'wplegal-feature'
        }, [createElement('div', {
            staticClass: 'wplegal-feature-icon'
        }, [createElement('img',{
            domProps:{
                src: obj.image_url + 'gdpr-compliance.png'
            }
        })]), createElement('div', {
            staticClass: 'wplegal-feature-content'
        }, [createElement('p', {
            staticClass: 'wplegal-feature-title',
            domProps: {
                textContent: obj.features.gdpr_text
            }
        }), createElement('p',{
            staticClass: 'wplegal-feature-text',
            domProps: {
                textContent: obj.features.gdpr_desc
            }
        })])]), createElement('div', {
            staticClass: 'wplegal-feature'
        }, [createElement('div', {
            staticClass: 'wplegal-feature-icon'
        }, [createElement('img',{
            domProps:{
                src: obj.image_url + 'forced-consent.png'
            }
        })]), createElement('div', {
            staticClass: 'wplegal-feature-content'
        }, [createElement('p', {
            staticClass: 'wplegal-feature-title',
            domProps: {
                textContent: obj.features.forced_text
            }
        }), createElement('p',{
            staticClass: 'wplegal-feature-text',
            domProps: {
                textContent: obj.features.forced_desc
            }
        })])]), createElement('div', {
            staticClass: 'wplegal-feature'
        }, [createElement('div', {
            staticClass: 'wplegal-feature-icon'
        }, [createElement('img',{
            domProps:{
                src: obj.image_url + 'easy-shortcodes.png'
            }
        })]), createElement('div', {
            staticClass: 'wplegal-feature-content'
        }, [createElement('p', {
            staticClass: 'wplegal-feature-title',
            domProps: {
                textContent: obj.features.easy_text
            }
        }), createElement('p',{
            staticClass: 'wplegal-feature-text',
            domProps: {
                textContent: obj.features.easy_desc
            }
        })])]), createElement('div', {
            staticClass: 'wplegal-feature'
        }, [createElement('div', {
            staticClass: 'wplegal-feature-icon'
        }, [createElement('img',{
            domProps:{
                src: obj.image_url + 'easy-to-install.png'
            }
        })]), createElement('div', {
            staticClass: 'wplegal-feature-content'
        }, [createElement('p', {
            staticClass: 'wplegal-feature-title',
            domProps: {
                textContent: obj.features.install_text
            }
        }), createElement('p',{
            staticClass: 'wplegal-feature-text',
            domProps: {
                textContent: obj.features.install_desc
            }
        })])]), createElement('div', {
            staticClass: 'wplegal-feature'
        }, [createElement('div', {
            staticClass: 'wplegal-feature-icon'
        }, [createElement('img',{
            domProps:{
                src: obj.image_url + 'helpful-docs-guides.png'
            }
        })]), createElement('div', {
            staticClass: 'wplegal-feature-content'
        }, [createElement('p', {
            staticClass: 'wplegal-feature-title',
            domProps: {
                textContent: obj.features.helpful_text
            }
        }), createElement('p',{
            staticClass: 'wplegal-feature-text',
            domProps: {
                textContent: obj.features.helpful_desc
            }
        })])]), createElement('div', {
            staticClass: 'wplegal-feature'
        }, [createElement('div', {
            staticClass: 'wplegal-feature-icon'
        }, [createElement('img',{
            domProps:{
                src: obj.image_url + 'multilingual-support.png'
            }
        })]), createElement('div', {
            staticClass: 'wplegal-feature-content'
        }, [createElement('p', {
            staticClass: 'wplegal-feature-title',
            domProps: {
                textContent: obj.features.multilingual_text
            }
        }), createElement('p',{
            staticClass: 'wplegal-feature-text',
            domProps: {
                textContent: obj.features.multilingual_desc
            }
        })])])])]);
    }
});

Vue.component('WizardSection', {
    render(createElement) {
        return createElement('div', {
            staticClass: 'wplegal-wizard-section'
        }, [createElement('div', {
            staticClass: 'wplegal-section-content'
        }, [createElement('p',{
            domProps: {
                textContent: obj.wizard.text
            }
        }), createElement('p',{
            domProps: {
                textContent: obj.wizard.subtext
            }
        }), createElement('a', {
            staticClass: 'wplegal-button',
            domProps: {
                textContent: obj.wizard.button_text,
                href:obj.wizard.url
            }
        })])]);
    }
});

var app = new Vue({
    el: '#gettingstartedapp',
    data: {
        is_pro: obj.is_pro,
        disabled: !1
    },
    render(createElement) {
        return createElement('div',{
            staticClass: 'wplegal-container'
        },[createElement('header-section'),
        createElement('div',{
            staticClass: 'wplegal-container-main'
        },[createElement('welcome-section'), createElement('video-section'), createElement('help-section'),createElement('terms-section'), this.disabled && !this.is_pro ? createElement('settings-section') : [], this.disabled && !this.is_pro ? createElement('pages-section') : []]),
        createElement('div',{
        staticClass: 'wplegal-container-features'
        },[this.is_pro ? this.disabled ? createElement('wizard-section') : [] : createElement('features-section')])]);
    }
});

var vm = new Vue({
    el: '#wplegal-mascot-app',
    data: function() {
        return {
            showMenu: !1,
            isPro:obj.is_pro
        }
    },
    computed: (
        {
            boxClass() {
                return {
                    'wplegal-mascot-quick-links wplegal-mascot-quick-links-open' : this.showMenu,
                    'wplegal-mascot-quick-links' : !this.showMenu,
                }
            },
            menuItems() {
                var mItems = [
                    {
                        icon: 'dashicons-lightbulb',
                        tooltip: obj.menu_items.support_text,
                        link: obj.menu_items.support_url,
                        key: 'support'
                    },
                    {
                        icon: 'dashicons-info',
                        tooltip: obj.menu_items.faq_text,
                        link: obj.menu_items.faq_url,
                        key: 'faq'
                    },
                    {
                        icon: 'dashicons-sos',
                        tooltip: obj.menu_items.documentation_text,
                        link: obj.menu_items.documentation_url,
                        key: 'documentation'
                    }
                ];
                if(!this.isPro) {
                    mItems.push({
                        icon: 'dashicons-star-filled',
                        tooltip: obj.menu_items.upgrade_text,
                        link: obj.menu_items.upgrade_url,
                        key: 'upgrade'
                    });
                }
                return mItems;
            }
        }
    ),
    methods:{
        buttonClick: function(){
            this.showMenu = !this.showMenu;
        },
        renderElements:function(createElement) {
            var html = [];
            if(this.showMenu) {
                this.menuItems.forEach((value, index) => {
                    html.push(createElement('a', {
                        key: value.key,
                        class: this.linkClass(value.key),
                        attrs: {
                            href: value.link,
                            'data-index': index,
                            target: '_blank'
                        }
                    }, [createElement('span', {
                        class: 'dashicons '+ value.icon
                    }), createElement('span', {
                        staticClass: 'wplegal-mascot-quick-link-title',
                        domProps: {
                            innerHTML: value.tooltip
                        }
                    })]));
                })
            }
            return html;
        },
        linkClass: function(key) {
            return 'wplegal-mascot-quick-links-menu-item wplegal-mascot-quick-links-item-' + key;
        },
        enter:function(t,e) {
            var n = 50 * t.dataset.index;
            setTimeout((function() {
                t.classList.add('wplegal-mascot-show'),
                    e()
            }), n)
        },
        leave:function(t,e) {
            t.classList.remove('wplegal-mascot-show'),
                setTimeout((function() {
                    e()
                }), 200)
        }
    },
    render(createElement){
        return createElement('div',{
            class: this.boxClass,
        }, [
            createElement('button', {
                class: 'wplegal-mascot-quick-links-label',
                on: {
                    click: this.buttonClick
                }
            },[
                createElement('span', {
                    class:'wplegal-mascot-bg-img wplegal-mascot-quick-links-mascot',
                }),
                createElement('span',{
                    class: 'wplegal-mascot-quick-link-title'
                }, obj.quick_links_text)
            ]),
            createElement('transition-group', {
                staticClass: 'wplegal-mascot-quick-links-menu',
                attrs:{
                    tag: 'div',
                    name: 'wplegal-staggered-fade'
                },
                on: {
                    enter: this.enter,
                    leave: this.leave
                }
            }, this.renderElements(createElement))
        ]);
    },
});