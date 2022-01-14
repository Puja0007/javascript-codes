'use strict';

this.table="spl table";

const bookTable = function(){
    console.log(this.table);
}
bookTable.call(this);