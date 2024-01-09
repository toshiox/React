export interface AlterDetails {
    show: boolean;
    title: string;
    message: string;
    modalSize?: 'sm' | 'lg' | 'xl'; 
    handleClose: () => void;
    variant?: 'success' | 'error'
}