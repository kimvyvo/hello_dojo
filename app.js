const title = React.createElement('h1', null, 'Hello Dojo!')
const subtitle = React.createElement('h3', null, 'Things I need to do:');
const list = React.createElement('ul', null, [
        React.createElement('li', null, 'Learn React'),
        React.createElement('li', null, 'Do 1 algorithm challenge per day'),
        React.createElement('li', null, 'Apply to 1 job per day'),
        React.createElement('li', null, 'Take notes'),
        React.createElement('li', null, 'Lose 30 lbs'),
        React.createElement('li', null, 'Exercise for at least 1 hr per day'),
        React.createElement('li', null, 'Work on project'),
    ]
)
const container = React.createElement('div', {}, [title, subtitle, list]);
ReactDOM.render(container, document.getElementById('container'));