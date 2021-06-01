class Test {

    constructor(gridClass) {
        let me = this;
        me.grid = $(gridClass);
        me.openNav();
    }

    openNav() {
        let me = this;
        // debugger
        me.grid.on("click", "div", function() {
            me.grid.find(".menu").removeClass("menu-edit");
            $(this).addClass("menu-edit");
        })
    }
}

let test = new Test(".menu")