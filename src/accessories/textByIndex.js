const text1 = 'Get your taxes done today'
const text2 = 'We work with you directly to get the most out of your tax returns'
const text3 = 'Don\'t wait until it\'s too late! Give us a call at 111-222-3333'

const text = [text1, text2, text3]

const textByIndex = (index) => text[index % text.length]

export default textByIndex;