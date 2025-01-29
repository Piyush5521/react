// union ------------->

// function kgToLbs(weight: number | string): number {
//     if(typeof weight === 'number')
//         return weight * 2.2;
//     else
//         return parseInt(weight) * 2.2;
// }

// kgToLbs(10);
// kgToLbs('10kg');


// Intersection ---------------------->


type Draggable = {
    drag: () => void
};

type Resizeable = {
    resize: () => void
}

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}



// Literals --------------------------->

// let quantity: 10 | 50;
// quantity = 50


// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = 'cm' | 'inch';


function greet(name: string | null | undefined) {
    if(name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!')
}

greet(undefined);