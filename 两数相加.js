let addTwoNumbers = function (link1, link2) {
  const dummy = new LinkedList()
  const cur = dummy
  let carry = 0
  while (link1 !== null || link2 !== null) {
    let sum = 0
    if (link1 !== null) {
      sum += link1.val
      link1 = link1.next
    }
    if (link2 !== null) {
      sum += link2.val
      link2 = link2.next
    }
    sum += carry
    cur.next = new LinkedList(sum % 10)
    carry = Math.floor(sum/10)
    carry = carry.next
  }
  if (carry > 0) {
    cur.next = new LinkedList(carry)
  }
  return dummy.next
}