import axios from 'axios';
import {computed, ComputedRef, ref, Ref} from 'vue';
import {toQueryString} from "~/models/helpers";
export class ListDataSource  {
    items:any[] = [];
    filter:any = {};
    pageIndex:number = 1;
    pageSize:number = 10;
    orderFieldName:string = "";
    orderFieldDirection:string = "";
    loading:boolean = false;
    total:number = 0;
    fields:string = "";
    loaded:boolean = false;
    className:string = "";
    filterExcludeValues: any[]

    constructor(init: Partial<ListDataSource>) {
        this.items = init.items??[];
        this.filter = init.filter ?? {
            searchText:""
        };
        this.pageIndex = init.pageIndex??1;
        this.pageSize = init.pageSize??20;
        this.orderFieldName = init.orderFieldName??"Id";
        this.orderFieldDirection = init.orderFieldDirection??"ASC";
        this.loading = init.loading ??false;
        this.total = init.total??0;
        this.fields = init.fields??"";
        this.loaded = init.loaded??false;
        this.className = init.className??"";
        this.filterExcludeValues = init.filterExcludeValues??[null, undefined,NaN]
    }

    get filterString(){
        return JSON.stringify(Object.fromEntries(
            Object.entries(this.filter).filter(([_, value]) => !this.filterExcludeValues.includes(value))
        ));
    }

    get queryParams(): string {
        return toQueryString({
            pi: this.pageIndex,
            ps: this.pageSize,
            of: this.orderFieldName,
            od: this.orderFieldDirection,
            p: this.fields,
            f: this.filterString ?? ""
        });
    }

    async get() {
        try {
            const { data } = await axios.get(`https://manage.dukongo.kg/api/v1/public/${this.className}`, this.queryParams);
            this.items = data.items;
            this.total = data.total;
            this.loaded = true;
        } catch (error) {
            console.log(error);
        }
    }
}

export class CommodityDataSource extends ListDataSource {
    constructor(init: Partial<CommodityDataSource>) {
        super(init);
    }
}