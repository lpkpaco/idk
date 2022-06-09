radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        HC_motor.stopMotor(HC_motor.Motors.Motor1)
        HC_motor.startMotor(HC_motor.Motors.Motor2, HC_motor.MotorDirection.CCW, balance)
    } else if (receivedNumber == 1) {
        HC_motor.startMotor(HC_motor.Motors.Motor3, HC_motor.MotorDirection.CW, 80)
        HC_motor.startMotor(HC_motor.Motors.Motor2, HC_motor.MotorDirection.CCW, balance)
    } else if (receivedNumber == 2) {
        HC_motor.stopAllMotors()
    } else if (receivedNumber == 3) {
        HC_motor.startMotor(HC_motor.Motors.Motor1, HC_motor.MotorDirection.CW, 40)
        HC_motor.startMotor(HC_motor.Motors.Motor2, HC_motor.MotorDirection.CCW, 70 + 20)
    } else if (receivedNumber == 4) {
        HC_motor.startMotor(HC_motor.Motors.Motor1, HC_motor.MotorDirection.CCW, 80)
        HC_motor.startMotor(HC_motor.Motors.Motor2, HC_motor.MotorDirection.CW, 80 - balance)
    } else if (receivedNumber == 5) {
        HC_motor.startMotor(HC_motor.Motors.Motor1, HC_motor.MotorDirection.CW, 0)
        HC_motor.startMotor(HC_motor.Motors.Motor2, HC_motor.MotorDirection.CCW, 70)
    } else if (receivedNumber == 6) {
        HC_motor.startMotor(HC_motor.Motors.Motor1, HC_motor.MotorDirection.CW, 70)
        HC_motor.startMotor(HC_motor.Motors.Motor2, HC_motor.MotorDirection.CCW, 30)
    }
})
let balance = 0
balance = 7
radio.setGroup(69)
