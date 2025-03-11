module.exports = {
    important: false,
    content: [
        "src/views/**/*.twig",
        "src/assets/js/**/*.js",
        //todo:: inject it via the plugin or easier way
        'node_modules/@salla.sa/twilight-tailwind-theme/safe-list-css.txt',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme   : {
        container : {
            center : true,
            padding: '10px',
            screens: {
                '2xl': "1280px"
            }
        },
        fontFamily: {
            sans: [
                'var(--font-main)',
                '-apple-system',
                'BlinkMacSystemFont',
            ],
            primary: "var(--font-main)"
        },
        extend    : {
            transitionTimingFunction: {
              'elastic': 'cubic-bezier(0.55, 0, 0.1, 1)',
            },
            gridTemplateColumns: {
                'auto-fill'  : 'repeat(auto-fill, 290px)',
            },
            colors             : {
                'dark'         : '#1D1F1F',
                'darker'       : '#0E0F0F',
                'danger'       : '#AE0A0A',
                'neon': {
                    'blue'     : '#00F0FF',
                    'purple'   : '#8A2BE2',
                    'pink'     : '#FF00FF',
                    'green'    : '#39FF14',
                    'yellow'   : '#FFFF00',
                    'red'      : '#FF3131'
                },
                'cyber': {
                    'dark'     : '#0D0221',
                    'light'    : '#541388',
                    'accent'   : '#F706CF'
                }
            },
            spacing: {
              '3.75': '15px',
              '7.5' : '30px',
              '58'  : '232px',
              '62'  : '248px',
              '100' : '28rem',
              '116' : '464px',
              '132' : '528px',
              '200' : '800px',
            },
            borderRadius       : {
                'large': '22px',
                'big'  : '40px',
                'tiny' : '3px',
                DEFAULT: '.75rem',
            },
            fontSize           : {
                'icon-lg'   : '33px',
                'xxs'       : '10px',
                'xxxs'      : '8px',
                'title-size': '42px',
                '22px'      : '22px',
            },
            lineHeight         : {
                '12': '3rem',
                '14': '3.5rem',
                '16': '4rem',
                '18': '4.5rem',
                '20': '5rem',
            },
            boxShadow          : {
                'default' : '5px 10px 30px #2B2D340D;',
                'top'     : '0px 0px 10px #0000001A;',
                'md'      : '5px 10px 99px #2B2D340D',
                'dropdown'      : '0 4px 8px rgba(161, 121, 121, 0.07)',
                'light'   : '0px 4px 15px rgba(1, 1, 1, 0.06)',
                'huge'    : '0px 3px 6px #00000029',
                'progress': '0 5px 15px rgba(92, 213, 196, 0.4)',
                'mobile': 'rgb(0 0 0 / 9%) 0px 2px 1px, rgb(0 0 0 / 9%) 0px 4px 2px, rgb(0 0 0 / 9%) 0px 8px 4px, rgb(0 0 0 / 9%) 0px 16px 18px, rgb(0 0 0 / 9%) -15px 10px 7px, rgb(0 0 0 / 9%) -20px 10px 20px, rgb(0 0 0 / 9%) -20px 10px 20px, rgb(0 0 0 / 9%) -25px 20px 20px',
                'neon-blue': '0 0 5px #00F0FF, 0 0 10px #00F0FF, 0 0 15px #00F0FF',
                'neon-purple': '0 0 5px #8A2BE2, 0 0 10px #8A2BE2, 0 0 15px #8A2BE2',
                'neon-pink': '0 0 5px #FF00FF, 0 0 10px #FF00FF, 0 0 15px #FF00FF',
                'neon-green': '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            },
            width              : {
                '18': '4.5rem',
                '22': '5.5rem',
                '74': '18.5rem',
                '76': '19rem',
                '78': '19.5rem',
            },
            height             : {
                'banner'        : '200px',
                'lg-banner'     : '428px',
                'full-banner'   : '600px',
                '500'           : '500px',
                '460'           : '460px',
            },
            minWidth           : {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            maxWidth           : {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            zIndex             : {
                '1': '1',
                '2': '2',
                '-1': '-1',
            },
            screens            : {
                'xxs': {'min': '380px', 'max': '479px'},
                'xs': '480px',
            },
            backgroundOpacity  : {
                '05': '0.05',
            },
            transitionProperty : {
                'height': 'height'
            },
            keyframes: {
                slideUpFromBottom: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0%)', opacity: '1' },
                },
                slideDownFromBottom: {
                    '0%': { transform: 'translateY(0%)', opacity: '1' },
                    '100%': { transform: 'translateY(100%)', opacity: '0' },
                },
                neonPulse: {
                    '0%, 100%': { 
                        boxShadow: '0 0 5px #00F0FF, 0 0 10px #00F0FF' 
                    },
                    '50%': { 
                        boxShadow: '0 0 20px #00F0FF, 0 0 30px #00F0FF, 0 0 40px #00F0FF' 
                    }
                },
                glowBorder: {
                    '0%, 100%': {
                        borderColor: 'rgba(0, 240, 255, 0.7)'
                    },
                    '50%': {
                        borderColor: 'rgba(255, 0, 255, 0.7)'
                    }
                },
                cyberpunkFlicker: {
                    '0%, 100%': { opacity: '1' },
                    '33%': { opacity: '0.9' },
                    '66%': { opacity: '0.95' }
                }
            },
            animation: {
                slideUpFromBottom: 'slideUpFromBottom .6s linear',
                slideDownFromBottom: 'slideDownFromBottom .6s linear',
                neonPulse: 'neonPulse 2s infinite',
                glowBorder: 'glowBorder 3s infinite',
                cyberpunkFlicker: 'cyberpunkFlicker 2.5s infinite'
            },
        },
    },
    corePlugins: {
      outline: false,
    },
    plugins: [
      require('@salla.sa/twilight-tailwind-theme'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
    ],
}
