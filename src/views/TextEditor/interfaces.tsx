export interface Data {
    id: string;
    tags: string;
    title: string;
    resume: string;
    subtitle: string;
    timeRead: number;
    language: string;
    createdAt: string;
    _id: { $oid: string };
}

export interface DetailsModalProps {
    show: boolean;
    handleClose: () => void;
    rowData: any;
    modalSize?: 'sm' | 'lg' | 'xl'; 
    onUpdate: (success: boolean) => void;
}   