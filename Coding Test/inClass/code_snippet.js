class Node {
    constructor(data){
        this.data = data;
        // this.child = []; // 2진트리가 아닌 트리가 됨
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(data) {
        let init = new Node(data);
        this.root = init;
        this.데이터수 = 0;
    }

    length(){
        return this.데이터수;
    }

    insert(data){
        let 새로운노드 = new Node(data);
        let 순회용현재노드 = this.root;

        while(순회용현재노드){
            if (data === 순회용현재노드.data){
                // 중복된 값은 탈락!
                return;
            }
            if (data < 순회용현재노드.data){
                // 들어온 데이터가 작으면 왼쪽에
                // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
                if (!순회용현재노드.left){
                    순회용현재노드.left = 새로운노드;
                    return;
                }
                순회용현재노드 = 순회용현재노드.left;
            }
            if (data > 순회용현재노드.data){
                // 들어온 데이터가 크면 오른쪽에
                // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
                if (!순회용현재노드.right){
                    순회용현재노드.right = 새로운노드;
                    return;
                }
                순회용현재노드 = 순회용현재노드.right;
            }
        }
        
        this.데이터수 += 1;
    }
}

let t = new Tree(5); // root노드는 처음에!!
t.append(3);
t.append(8);
t.append(1);
t.append(4);
t.append(6);
t.append(9);