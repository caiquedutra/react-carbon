import './HistoricalGrid.css';
import {
    DataTable,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
} from 'carbon-components-react';

const headers = [
    {
        key: 'name',
        header: 'Name',
    },
    {
        key: 'status',
        header: 'Tipo',
    },
    {
        key: 'statuss',
        header: 'Data',
    },
];

const HistoricalGrid = ((props) => {
    // const handleSelectedFile = () => {
    //     for (var i = 0; props.selectedFile.length; i++) {
    //         return (
    //             <TableRow rows="4"  {...getRowProps({ row })}>
    //                 <TableCell key={row.id} >{row.name}</TableCell>
    //                 <TableCell key={row.id}>{row.type}</TableCell>
    //                 <TableCell key={row.id}>{new Date().toString()}</TableCell>
    //             </TableRow>

    //         )

    //     }

    // }
    return (
        <div className="main-table">
            <DataTable rows={props.selectedFile} headers={headers}>
                {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
                    <Table {...getTableProps()}>
                        <TableHead>
                            <TableRow>
                                {headers.map((header) => (
                                    <TableHeader {...getHeaderProps({ header })}>
                                        {header.header}
                                    </TableHeader>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {props.selectedFile.length
                                ? props.selectedFile.map((row) => (

                                    <TableRow rows="4"  {...getRowProps({ row })}>
                                        <TableCell key={row.id} >{row.name}</TableCell>
                                        <TableCell key={row.id}>{row.type}</TableCell>
                                        <TableCell key={row.id}>{new Date().toString()}</TableCell>
                                    </TableRow>
                                )) : <>
                                    <TableRow>
                                        <TableCell>No result</TableCell>
                                        <TableCell>No result</TableCell>
                                        <TableCell>No result</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>No result</TableCell>
                                        <TableCell>No result</TableCell>
                                        <TableCell>No result</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>No result</TableCell>
                                        <TableCell>No result</TableCell>
                                        <TableCell>No result</TableCell>
                                    </TableRow>
                                </>}
                        </TableBody>
                    </Table>
                )}
            </DataTable>
        </div >
    )

})
export default HistoricalGrid;