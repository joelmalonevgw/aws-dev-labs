import { lab2 } from "./labs/lab-2";
import { lab3 } from "./labs/lab-3";

const allLabs: Array<() => Promise<any>> = [
    lab3, lab2
]

async function runLabs(labs: Array<() => Promise<any>>): Promise<void> {
    if (labs.length === 0) {
        return
    }

    const next = labs[0]
    await next()

    return await runLabs(labs.slice(1))
}

runLabs(allLabs)
    .catch(err => {
        console.log('Unhandled error in execution.', err)
    })
