//% weight=100 color=#0fbc11 icon="\uf205" block="DigitalWritePin0"
namespace DigitalWritePin0 {
    /**
     * Write digital 1 to Pin 0.
     */
    //% block="set Pin 0 to digital 1"
    export function setPin0High(): void {
        pins.digitalWritePin(DigitalPin.P0, 1);
    }
}
