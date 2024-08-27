import { fetchData } from "../utils/common";

// Mock the global fetch function
global.fetch = jest.fn();

test("fetchData returns data correctly", async () => {
  // Mock the resolved fetch response
  (fetch as jest.Mock).mockResolvedValueOnce({
    json: async () => ({ data: "Mock Data" }),
  });

  const result = await fetchData("https://mockapi.io/data");

  // Check if fetch was called with the correct URL
  expect(fetch).toHaveBeenCalledWith("https://mockapi.io/data");
  
  // Check if the result matches the mock data
  expect(result).toEqual({ data: "Mock Data" });
});

test("fetchData handles fetch failure", async () => {
  // Mock a fetch failure
  (fetch as jest.Mock).mockRejectedValueOnce(new Error("Failed to fetch"));

  // Test rejection and check for the thrown error
  await expect(fetchData("https://mockapi.io/data")).rejects.toThrow("Failed to fetch");
});
