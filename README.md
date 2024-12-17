# MongoDB $inc Operator Error: Unexpected Behavior When Decrementing Below Zero
This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB update operations. Specifically, the issue arises when attempting to decrement a counter below zero without implementing appropriate error handling or safeguards.
The `bug.js` file contains code that reproduces the problem. The `bugSolution.js` file provides a corrected version with improved error handling.
## Description
The `$inc` operator is a convenient way to increment or decrement a numeric field in a MongoDB document. However, if you attempt to decrement a counter beyond its minimum value (often 0), unexpected behavior might occur. This could lead to data inconsistencies or errors in your application.
## Solution
The solution involves adding a check to ensure the counter doesn't go below zero before applying the decrement operation. This can be achieved by using a conditional statement or by leveraging MongoDB's atomic operators and features like `$min`.