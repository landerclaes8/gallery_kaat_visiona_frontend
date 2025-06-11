import { useRef, useState } from "react";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { Group, Text, Button, Box } from "@mantine/core";
import { IconDownload, IconX, IconCloudUpload } from "@tabler/icons-react";
import axios from "axios";

interface Props {
  path: string;
  type: string;
  photoTrue: boolean;
}

const UploadFile = ({ path, type, photoTrue }: Props) => {
  const openRef = useRef<() => void>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleFile = (files: File[]) => {
    const selected = files[0];
    setFile(selected);
    setPreviewUrl(URL.createObjectURL(selected));
    setStatus(null);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    // naam om file op te halen in server
    formData.append(`${type}`, file);

    try {
      const response = await axios.post(`/api/${path}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setStatus("✅ Upload gelukt!");
      console.log("Response:", response.data);
    } catch (err) {
      console.error(err);
      setStatus("❌ Upload mislukt");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Dropzone
        openRef={openRef}
        onDrop={handleFile}
        accept={photoTrue ? [MIME_TYPES.webp] : [MIME_TYPES.mp4]}
        multiple={false}
        radius="md"
      >
        <div style={{ pointerEvents: "none" }}>
          <Group justify="center">
            <Dropzone.Accept>
              <IconDownload size={50} stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={50} color="red" stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload size={50} stroke={1.5} />
            </Dropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Reject>Only .webp images</Dropzone.Reject>
            <Dropzone.Idle>{`Upload ${type}`}</Dropzone.Idle>
          </Text>
          <Box ta="center">
            {previewUrl && (
              <div style={{ marginTop: 20 }}>
                {photoTrue ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    style={{ maxWidth: 200 }}
                  />
                ) : (
                  <video
                    src={previewUrl}
                    autoPlay={true}
                    muted
                    style={{ maxWidth: 200 }}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}
          </Box>
          <Text ta="center" fz="sm" mt="xs" c="dimmed">
            {photoTrue ? (
              <>
                Drag’n’drop a <i>.webp</i> image here to upload.
              </>
            ) : (
              <>
                Drag’n’drop a <i>.mp4</i> video here to upload.
              </>
            )}
            {status && <Text mt="md">{status}</Text>}
          </Text>
        </div>
      </Dropzone>

      <Group justify="center" mt="md">
        <Button onClick={() => openRef.current?.()}>Kies bestand</Button>
        <Button onClick={handleUpload} disabled={!file}>
          Upload
        </Button>
      </Group>
    </div>
  );
};

export default UploadFile;
