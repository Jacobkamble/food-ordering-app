import { timeoutMock } from "../utils/common";


test("should mock timeout",async()=>{

    const promise= timeoutMock();
    const result=await promise

    const expected=[{success: true, result: "Successfully fetched"}]

    expect(result).toEqual(expected)

})