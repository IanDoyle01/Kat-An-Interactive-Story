// Test Kat Game
describe("Kat Game", function() {
    
    // Check functions are defined
    describe("functions are defined", function() {
        // Check startGame is defined
        it("start game should exist", function() {
            expect(startGame).toBeDefined();
        });
        // Check showTextBlock is defined   
        it("show text block should exist", function() {
            expect(showTextBlock).toBeDefined();
        });
        // Check showOption is defined
        it("show option should exist", function() {
            expect(showOption).toBeDefined();
        });
        // Check selectOption is defined
        it("select option should exist", function() {
            expect(selectOption).toBeDefined();
        });
    });

    // Check startGame resets state when called
    // describe("state is empty on new game", function() {
    //     it("should clear the contents of state", function() {
    //         state = {"1" : "2"}
    //         startGame();
    //         expect(Object.state).toBe({});
    //     });
    // })
});

