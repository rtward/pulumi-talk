import * as pulumi from "@pulumi/pulumi";
import * as proxmox from "@muhlba91/pulumi-proxmoxve";

const provider = new proxmox.Provider('home-server', {
  endpoint: process.env.PROXMOX_VE_ENDPOINT,
  username: process.env.PROXMOX_VE_USERNAME,
  password: process.env.PROXMOX_VE_PASSWORD
});

const virtualMachine = new proxmox.vm.VirtualMachine('test-machine', {
    nodeName: 'pve1',
    bios: 'seabios',
    cpu: {
        cores: 1,
        sockets: 1,
    },
    clone: {
        nodeName: 'pve1',
        vmId: 9000,
        full: true,
    },
    disks: [
        {
            interface: 'scsi0',
            datastoreId: 'local-lvm',
            size: 32,
            fileFormat: 'qcow2',
        },
    ],
    memory: {
        dedicated: 1024,
    },
    name: 'proxmox-vm',
    networkDevices: [
        {
            bridge: 'vmbr0',
            model: 'virtio',
        },
    ],
    onBoot: true,
    operatingSystem: {
        type: 'l26',
    },
    initialization: {
        type: 'nocloud',
        datastoreId: 'local-lvm',
        dns: {
            server: '1.1.1.1 1.0.0.1',
        },
        ipConfigs: [
            {
                ipv4: {
                    address: '10.0.0.10/24',
                    gateway: '10.0.0.1',
                },
                ipv6: {
                    address: 'fd91:0812:a17f:6194::10/64',
                    gateway: 'fd91:0812:a17f:6194::1',
                },
            },
        ],
        userAccount: {
            username: 'proxmox',
            password: 'password',
            keys: ['SSH_PUBLIC_KEY'],
        },
    },
})
