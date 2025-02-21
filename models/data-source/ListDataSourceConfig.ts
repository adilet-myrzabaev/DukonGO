
class ListDataSourceConfig {
    public className: string;
    public pageIndex: number = 1;
    public pageSize: number = 20;
    public orderFieldName: string = 'Id';
    public orderFieldDirection: string = 'ASC';
    public filter:string = "";
    public fields:string = "";

    constructor(instance?: Partial<ListDataSourceConfig>) {
        Object.assign(this, instance);
    }
}