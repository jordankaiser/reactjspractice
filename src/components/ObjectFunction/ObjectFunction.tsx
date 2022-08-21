import { useState } from 'react';

function ObjectFunction() {
  type Person = {
    name: string
    id: number
  }

  const [testObject, setTestObject] = useState({
    name: 'Peter',
    id: 0,
  })

  const objectToString = (theObject: Person): string => JSON.stringify(theObject)

  const handleChangeCode = (passedObject: Person): void => {
    setTestObject(passedObject)
  }

  return (
    <>
      <button onClick={() => handleChangeCode({name: 'Bob', id: 2})}>Change code</button>
      <pre>
        {objectToString(testObject)}
      </pre>
    </>
  );
}

export { ObjectFunction };