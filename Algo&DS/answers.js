// Input:
// N = 5
// arr[] = {4, 1, 3, 9, 7}
// Output:
// 1 3 4 7 9


let bubbleSort = (arr, n) =>{
    let flag = false;

    for(let i=0; i<n-1; i++){

        for(let j=0;j<n- i -1; j++){

            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                flag=true;
            }

        }
        if(!flag) break;
    }

    console.log(arr);
    return arr;
}


// bubbleSort([4,1,3,9,7],5)
// bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10)


const binarySearch = (arr , key) =>{
    let mid = Math.floor((arr.length-1)/2);
    let right = arr.length -1;
    let left = 0;

    if(arr[mid]===key){
        return true;
    }

    while(right >= left){
        mid = Math.floor(right -left/2);

        if(arr[mid]===key){
            console.log("found at: ", mid);
            return true;
        }

        if(arr[mid] > key){
            right = mid -1;
        } else {
            left = mid+1;
        }
    }

    console.log("not found!")
    return false;
}

let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


// binarySearch(bubbleSort(array,10), 6);

class Node {
    constructor (value){
        this.value = value;
        this.next =  null;
    }
}

class LinkedList {
    constructor (){
        this.head = null;
        this.length = 0;
    }

    add(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            this.length ++;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
            this.length ++;
        }
    }

    remove(valX) {
        if (!this.head) {
            return;
        }
    
        if (this.head.value === valX) {
            this.head = this.head.next;
            return;
        }
    
        let current = this.head;
    
        while (current.next) {
            if (current.next.value === valX) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }

    print(){
        if(!this.head){
            console.log("list is empty!")
        }
        else {
            const printArray = [];
            let current = this.head;
            while(current){
                
                printArray.push(current.value);
                current = current.next
            }
            console.log(printArray.join(" -> "));
        }
    }
}

const list = new LinkedList;

// list.print()
list.add(1);
list.add(3);
list.add(2);
list.add(2);
list.add(1);
list.add(3);
list.add(2);
list.add(1);
// list.print();
list.remove(2);
// list.print();

