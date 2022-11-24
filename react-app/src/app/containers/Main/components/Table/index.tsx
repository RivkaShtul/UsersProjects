import { Column } from 'primereact/column';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Toolbar } from 'primereact/toolbar';
import { useState } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { selectProjectsInfo } from '../../../../store/selectors';

export const Table = (() => {
    const projectsInfo = useSelector(selectProjectsInfo);
    const [filters, setFilters] = useState<DataTableFilterMeta>({
        'global': { value: '', matchMode: 'contains' },
        'name': { value: '', matchMode: 'contains' },
        'score': { value: '', matchMode: 'equals' },
        'durationInDays': { value: '', matchMode: 'equals' },
        'bugsCount': { value: '', matchMode: 'equals' },
        'madeDedline': { value: '', matchMode: 'equals' }
    })

    const scoreTemplate = (rowData) => {
        return <div style={rowData.score < 70 ? { color: 'red' } : rowData.score > 90 ? { color: 'green' } : { color: 'black' }}>{rowData.score}</div>
    }

    return (
        <>
            <Toolbar style={{ margin: '10px 0px' }} className='mb-4'
                right={
                    <div>
                        <label style={{ margin: '20px' }}>{`average score : ${_.sumBy(projectsInfo, (p) => p.score) / projectsInfo.length}`}</label>
                        <label>{`made dedline (percent): ${projectsInfo.filter(p => p.madeDedline).length / projectsInfo.length}`}</label>
                    </div>
                }

            />
            < DataTable
                value={projectsInfo}
                size='small'
                filters={filters}
                filterDisplay='row'
                globalFilterFields={['id', 'name']}
            >
                <Column field='id' header='id' sortable filter filterPlaceholder='search id' />
                <Column field='name' header='name' sortable filter filterPlaceholder='search by name' />
                <Column field='score' header='score' sortable body={scoreTemplate} filter filterPlaceholder='search id' />
                <Column field='durationInDays' header='durationInDays' sortable filter />
                <Column field='bugsCount' header='bugsCount' sortable filter />
                <Column field='madeDedline' header='madeDedline' sortable filter />
            </DataTable>
        </>
    )
})