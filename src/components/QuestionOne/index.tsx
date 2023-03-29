import styles from "./index.module.scss"

import FindOutlier from "../FindOutlier"

export default function QuestionOne() {

    const example = `inputString1 = "10 9 8 6 4 2"
inputString2 = "7 9 1 6 3 5"

console.log(findOutlier(inputString1)) // 2
console.log(findOutlier(inputString2)) // 4
`

    const answer = `function findOutlier(inputString) {
    const numbers = inputString.split(" ").map(Number);
    const parity = getParity(numbers.slice(0, 3));

    for (let i = 0; i < numbers.length; i++) {
        if (getParity([numbers[i]]) !== parity) {
            return i + 1;
        }
    }
}

function getParity(numbers) {
    const even = numbers.filter(n => n % 2 === 0).length;
    const odd = numbers.length - even;
    return even > odd ? 'even' : 'odd';
}
`

    return (
        <div className={styles.questionOne}>
            <p>
                <strong>Question 1</strong>
            </p>
            <ul>
                <li>Given a string of integers separated by spaces, return the place of the integer with different parity.</li>
            </ul>
            <p>Parity means is a number odd or even.</p>
            <p>Constraints:</p>
            <ul>
                <li>All numbers except the outlier will have the same parity.</li>
                <li>The numbers will all be positive integers less than 10^9.</li>
                <li>The string will contain at least 3 numbers.</li>
            </ul>
            <p>Examples:</p>
            <pre>
                <code>
                    {example}
                </code>
            </pre>
            <p>Answer:</p>
            <pre>
                <code>{answer}</code>
            </pre>
            <FindOutlier />
        </div>
    )
}
