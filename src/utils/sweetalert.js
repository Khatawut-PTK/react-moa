import Swal from "sweetalert2";

export const showSuccess = (message = 'ดำเนินการเรียบร้อย') => {
    return Swal.fire({
        title: 'สำเร็จ',
        text: message,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        allowOutsideClick: false,
    }).then(() => {
        return true;
    });
};

export const showError = (message = 'เกิดข้อผิดพลาดบางอย่าง') => {
    Swal.fire({
        title: 'ผิดพลาด',
        text: message,
        icon: 'error',
        confirmButtonText: 'ตกลง',
        confirmButtonColor: '#d33',
    });
};

export const confirmLogout = (onConfirm) => {
    Swal.fire({
        title: 'ออกจากระบบ',
        text: 'คุณต้องการออกจากระบบใช่หรือไม่?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ออกจากระบบ',
        cancelButtonText: 'ยกเลิก',
        confirmButtonColor: '#d33',
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm();
        }
    });
};