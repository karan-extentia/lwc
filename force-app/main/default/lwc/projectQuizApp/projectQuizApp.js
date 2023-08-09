import { LightningElement } from 'lwc';

export default class ProjectQuizApp extends LightningElement {
    questionList = [
        {
            id: 'Question1',
            question: 'This is question 1',
            options: {
                a: "Option a",
                b: "Option b",
                c: "Option c",
                d: "Option d",
            },
            correctAnswer: "c"
        },
        {
            id: 'Question2',
            question: 'This is question 2',
            options: {
                a: "Option a",
                b: "Option b",
                c: "Option c",
                d: "Option d",
            },
            correctAnswer: "b"
        },
        {
            id: 'Question3',
            question: 'This is question 3',
            options: {
                a: "Option a",
                b: "Option b",
                c: "Option c",
                d: "Option d",
            },
            correctAnswer: "a"
        }
    ]
    selected = {};
    correctAnswers = 0;
    isSubmitted = false;

    handleRadioChange(event) {
        console.log('name', event.target.name)
        console.log('value', event.target.value)
        const { name, value } = event.target;
        this.selected = {
            ...this.selected,
            [name]: value,
        }
    }

    get submitDisabled() {
        return !(Object.keys(this.selected).length === this.questionList.length);
    }
    get isScoredFull() {
        return  `slds-text-heading_large ${this.questionList.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`;
    }

    handleSubmit(event) {
        event.preventDefault();
        let correctAnswerArray = this.questionList.filter(item => this.selected[item.id] === item.correctAnswer);
        this.correctAnswers = correctAnswerArray.length;
        console.log('this.correctAnswers', this.correctAnswers)
        this.isSubmitted = true;
    }

    handleReset() {
        this.selected = {};
        this.correctAnswers = 0;
        this.isSubmitted = false;
    }
}
