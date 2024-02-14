import { format } from 'date-fns';  
import DetailsModal from './modal';
import { Data } from './interfaces';
import { Table, Form, Row, Col } from 'react-bootstrap';
import { Column, useTable, useFilters } from 'react-table';
import React, { useState, useEffect, useMemo } from 'react';
import { ArticleService } from '../../Services/articleService';

const service = new ArticleService(); 

const Model: React.FC = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<Data[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const [selectedRowData, setSelectedRowData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.getDb('en');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();
  }, [count]);
  

  const columns: Column<Data>[] = useMemo(
    () => [
      { Header: 'ID', accessor: '_id', Cell: ({ value }) => <span>{value.$oid}</span>},
      { Header: 'Title', accessor: 'title' },
      { Header: 'Subtitle', accessor: 'subtitle' },
      { Header: 'Resume', accessor: 'resume' },
      { Header: 'Time Read', accessor: 'timeRead' },
      { Header: 'Tags', accessor: 'tags' },
      { Header: 'Language', accessor: 'language' },
      { Header: 'Created At', accessor: 'createdAt', Cell: ({ value }) => (<span>{format(new Date(value), 'MM/dd/yyyy hh:mm')}</span>) }],
    []
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || undefined;
    setFilter(value);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data },
    useFilters
  );

  const filteredRows = useMemo(() => {
    return rows.filter(row => {
      return Object.values(row.values).some((value: any) => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes((filter || '').toLowerCase());
        }
        return false;
      });
    });
  }, [filter, rows]);

  const handleRowClick = (row: any) => {
    setShowModal(true);
    setSelectedRowData(row.original);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRowData(null);
  };


  const handleUpdateResult = (success: boolean) => {
    if(success){
      setCount(count + 1);
    }
  };

  return (
    <div>
      <Form.Group controlId="formFilter">
        <Row>
          <Col md={5}>
            <Form.Control type="text"  placeholder="Search..."  value={filter || ''}  onChange={handleFilterChange} />
          </Col>
        </Row>
      </Form.Group>
      <Table striped bordered hover {...getTableProps()} responsive>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {filteredRows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} style={{ cursor: 'pointer' }} onClick={() => handleRowClick(row)}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <DetailsModal show={showModal} handleClose={handleCloseModal} rowData={selectedRowData} modalSize="lg" onUpdate={handleUpdateResult} />
    </div>
  );
};

export const DataTable = Model;