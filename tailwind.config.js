module.exports = {
  plugins: [require('@tailwindcss/custom-forms')],
  purge: {
    content: ['./components/**/*.js', './pages/**/*.js'],
    enabled: true,
    options: {
      safelist: [
        'bg-lightgreen-primary',
        'bg-lightgreen-secondary',
        'bg-sky-primary',
        'bg-sky-secondary',
        'bg-pop-primary',
        'bg-pop-secondary',
        'bg-dark-primary',
        'bg-dark-secondary',
        'border-lightgreen-secondary',
        'border-sky-secondary',
        'border-pop-secondary',
        'border-dark-secondary'
      ]
    }
  },
  theme: {
    fontFamily: {
      arabic: ['Scheherazade', 'Uthmanic'],
      libre: ['Libre Baskerville', 'serif']
    },
    colors: {
      white: '#fff',
      black: '#000',
      lightgreen: {
        primary: '#C0CFB2',
        secondary: '#E3E6DA'
      },
      sky: {
        primary: '#89BCC4',
        secondary: '#bcd9de'
      },
      pop: {
        primary: '#ffe5ea',
        secondary: '#fff2f4'
      },
      dark: {
        primary: '#121212',
        secondary: '#292929'
      }
    },
    extend: {
      gridTemplateRows: {
        11: 'repeat(11, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))',
        24: 'repeat(24, minmax(0, 1fr))'
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24'
      },
      gridRowStart: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
        25: '25'
      },
      gridRowEnd: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
        25: '25'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      textDecoration: ['focus-visible'],
      backgroundColor: ['active']
    }
  }
};
