/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let prev=null
        let curr=head
        //console.log(head)

        while(curr){
             //console.log(curr)
            let temp =curr.next//se guarda referencia siguiente nodo
            curr.next=prev//la 1ra lo iguala a null • se reasigna a donde apunta
            
            prev=curr //se asigna valor al nodo <---izquierdo o 'previo'
            curr=temp //se asigna valor nodo actual =----> nodo siguiente 'nodo derecho'

        console.log(prev.val)
        }
        return prev
    }
}
