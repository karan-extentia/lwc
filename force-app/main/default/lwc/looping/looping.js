import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    players = ['Virat Kohli', 'Rohit Sharma', 'MS Dhoni', 'Jasprit Bumrah', 'Ravindra Jadega'];

    playerList = [
        {
            id: 1,
            name: 'Virat Kohli',
            role: 'Batsman',
        },
        {
            id: 2,
            name: 'Rohit Sharma',
            role: 'Batsman',
        },
        {
            id: 3,
            name: 'MS Dhoni',
            role: 'Batsman/Wicketkeeper',
        },
        {
            id: 4,
            name: 'Jasprit Bumrah',
            role: 'Fast Bowler',
        },
        {
            id: 5,
            name: 'Ravindra Jadega',
            role: 'All Rounder',
        },
    ]
}
