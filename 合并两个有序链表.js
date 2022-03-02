/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  let head = new ListNode(null,null);
  let temp = head;

  while(l1 !== null && l2 !== null) {

      if(l1.val <= l2.val) {
          temp.next = l1;
          temp = l1;
          l1 = l1.next;
      }else {
          temp.next = l2;
          temp = l2;
          l2 = l2.next;
      }
  }

  if(l1 !== null) {
      temp.next = l1; 
  }

  if(l2 !== null) {
      temp.next = l2;
  }

  return head.next;
};