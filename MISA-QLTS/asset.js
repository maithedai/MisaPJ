class AssetPage {

    constructor(gridId) {
        let me = this;

        me.grid = $(gridId);
        // me.openNav();
    }

    /** 
     * Hàm dùng để render dữ liệu danh sách tài sản
     * MTDAI 30.05.2021
     */
    loadData(data) {
            let me = this,
                table = $("<table></table>"),
                thead = me.renderHeader(),
                tbody = me.renderTbody(data);

            table.append(thead);
            table.append(tbody);

            me.grid.find("table").remove();
            me.grid.append(table);
        }
        // openNav() {
        //     // debugger
        //     let me = this;
        //     me.on("click", "div", function() {
        //         debugger
        //         me.find(".menu").removeClass("menu-edit");
        //         $(this).addClass("menu-edit");
        //     })
        // }

    /**
     * Hàm dùng để render header table
     * MTDAI 30.05.2021
     */
    renderHeader() {
        let me = this,
            thead = $("<thead></thead>"),
            row = $("<tr></tr>");

        me.grid.find(".col").each(function() {
            let text = $(this).text(),
                th = $("<th></th>");
            th.text(text);
            row.append(th)
        });
        thead.append(row);

        return thead;
    }

    /**
     * Hàm dùng để render ra tbody
     * @param {Hàm} data
     */
    renderTbody(data) {
        let me = this,
            tbody = $("<tbody></tbody>");

        if (data && data.length > 0) {
            data.filter(function(item) {
                let row = $("<tr></tr>");

                me.grid.find(".col").each(function() {
                    let fieldName = $(this).attr("FieldName"),
                        dataType = $(this).attr("dataType"),
                        data = item[fieldName],
                        cell = $("<td></td>"),
                        className = me.getClassFormat(dataType),
                        value = me.getValue(data, dataType);

                    cell.text(value);
                    cell.addClass(className);
                    row.append(cell);
                });

                tbody.append(row);
            });
        }

        return tbody;
    }

    getClassFormat(dataType) {
        let me = this,
            className = "";

        switch (dataType) {
            case "Number":
                className = "align-right";
                break;
            case "Date":
                className = "align-center";
                break;
        }

        return className;
    }

    getValue(data, dataType) {
        let me = this;

        switch (dataType) {
            case "Date":
                break;
            case "Enum":
                break;
        }

        return data;
    }
}

let assetPage = new AssetPage("#gridAsset");
assetPage.loadData(assets);