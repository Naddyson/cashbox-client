import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui'

class AlertDialog extends React.Component {


    handleClose = () => {
        this.props.close();
    };
    handleConfirm = () => {
        this.props.func();
        this.props.close();
    };

    render() {
        return (
            <div>

                <Dialog
                    open={this.props.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{this.props.text}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {'This action cannot be undone'}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="danger">
                            No
                        </Button>
                        <Button onClick={this.handleConfirm} color="primary" autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AlertDialog;